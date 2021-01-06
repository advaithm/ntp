const axios = require('axios');
const fs = require("fs");
const { resolve } = require("path");

require('dotenv').config();

const OFFICIAL_ID = "67042424"
let totalPages = 0;
let images = new Set();

const getImages = (pageNum) => {
    return new Promise(async (resolve) => {
        const res = await axios.get(`https://api.unsplash.com/collections/${OFFICIAL_ID}/photos?page=${pageNum}&per_page=30`, { 
            headers: {
                authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
            }
        })

        if(res.data.length == 0) return resolve(false);
        console.log(`Downloading page ${pageNum}...`)

        res.data.map((i) => images.add({
            id: i.urls.raw.split("https://images.unsplash.com/")[1].split("?")[0],
            original_url: i.urls.raw,
            author_name: i.user.name,
            author_username: i.user.username,
            url: i.links.html
        }))

        console.log(`Done page ${pageNum}!`)

        resolve(true)
    })
}

const downloadImage = (data) => {
    return new Promise(async (resol) => {
        const url = data.original_url;

        const res = await axios.get(url + `?w=2560`, { responseType: 'stream' })

        const filename = res.request.path.substr(1).split("?")[0] + "." + res.headers["content-type"].split("image/")[1];
        console.log(resolve(__dirname, "backgrounds", "unsplash", filename))

        res.data.pipe(fs.createWriteStream(resolve(__dirname, "backgrounds", "unsplash", filename)))

        resol(true)
    })
}

const main = async () => {
    await getImages(1);

    let i = 1;

    while(true) {
        ++i;
        const res = await getImages(i);
        if(res == false) break;
    }

    console.log("Saved image URIs.");

    Array.from(images).forEach(async image => {
        await downloadImage(image);
    })

    fs.writeFileSync(resolve(__dirname, "backgrounds.json"), JSON.stringify(Array.from(images), null, 2))
}

main();