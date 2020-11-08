import axios from 'axios';
import express from 'express';
import * as proxy from 'express-http-proxy';
import * as rateLimit from 'express-rate-limit';

require('dotenv').config()

const app = express()
const port = 3000

const ratelimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/unsplash/wallpaper', ratelimiter, (req, res) => {
    axios.get("https://api.unsplash.com/photos/random?collections=67042424&count=1", { headers: { authorization: `Client-ID ${process.env.UNSPLASH_KEY}` } })
        .then(resp => {
            res.json({ 
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
            });
        })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

if(process.env.NODE_ENV == "development") {
    
} else app.use(express.static("public"));