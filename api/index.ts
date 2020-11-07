import axios from 'axios';
import * as express from 'express';
import * as proxy from 'express-http-proxy';

require('dotenv').config()

const app = express()
const port = 3000

let cachedWallpaper: any;
let cachedWPB64 = "";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/integration/unsplash/daily-wallpaper', (req, res) => {
    if(cachedWallpaper) return res.json(cachedWallpaper)

    axios.get("https://api.unsplash.com/photos/random?collections=67042424&count=1", { headers: { authorization: `Client-ID ${process.env.UNSPLASH_KEY}` } })
        .then(resp => {
            cachedWallpaper = { 
                url: resp.data[0].urls.raw, 
                location: resp.data[0].location.name && {
                    pretty: resp.data[0].location.name,
                    position: [resp.data[0].location.position.latitude, resp.data[0].location.position.longitude]
                },
                attribution: { 
                    name: resp.data[0].user.name, 
                    logon: resp.data[0].user.username, 
                    originalPhoto: resp.data[0].links.html 
                } 
            };

            res.json(cachedWallpaper);
        })
})

app.get("/integration/unsplash/daily-wallpaper/b64", async (req, res) => {
    if(cachedWallpaper) {
        axios.get(cachedWallpaper.url, { responseType: "arraybuffer" }).then(d => {
            const buffer = Buffer.from(d.data).toString("base64");

            res.send(buffer);
        })
    } else {
        const { data } = await axios.get("https://api.unsplash.com/photos/random?collections=67042424&count=1", { headers: { authorization: `Client-ID ${process.env.UNSPLASH_KEY}` } }).then(r => r)
    
        axios.get(data[0].urls.raw, { responseType: "arraybuffer" }).then(d => {
            const buffer = Buffer.from(d.data).toString("base64");

            res.send(buffer);
        })
    }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

if(process.env.NODE_ENV == "development") {
    
} else app.use(express.static("public"));