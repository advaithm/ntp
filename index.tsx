import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import React from 'react';
import ReactDOMServer from "react-dom/server";

dotenv.config();

const app = express();

app.use(express.static(__dirname));

interface UnsplashImage {
    id?: string;
    url: string;
    author: string;
    author_username: string;
    image: any;
}

let backgrounds: { [key: string]: UnsplashImage[] } = {
    official: []
}

axios.get("https://api.unsplash.com/collections/67042424/photos?per_page=9999999", {
    headers: {
        authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
    }
}).then(i => {
    i.data.map(async (img: any) => {
        const buffer = await axios.get(img.urls.raw + "&w=1920", { responseType: "arraybuffer" }).then(base => {
            return Buffer.from(base.data, "utf8")
        })

        backgrounds.official.push({
            url: img.links.html,
            author: img.user.name,
            author_username: img.user.username,
            image: buffer
        })
    })
})

app.get("/api", (req, res) => {
    res.json({
        ok: true
    })
})

app.get("/api/backgrounds/unsplash", (req, res) => {
    console.log(backgrounds.official.length)

    const collection = (req.query.collection as any) || "official"
    const background = backgrounds[collection][Math.floor(Math.random() * backgrounds[collection].length)];

    res.end(background.image)
})

app.get("/plugin/:id/mount", (req, res) => {
    const manifest = JSON.parse((readFileSync(`${__dirname}/plugins/${req.params.id}/manifest.json`) as any));
    if(!manifest || !manifest.mount) res.end("");

    const Mount = require(`${__dirname}/plugins/${req.params.id}/${manifest.mount}`).default;
    if(!Mount) res.end("")

    const rendered = ReactDOMServer.renderToString(<Mount />)
    const template = readFileSync(`${__dirname}/plugins/mount.html`, "utf-8");    

    res.end(
        template
            .replace(/!\[title\]/g, manifest.name)
            .replace(/!\[component\]/g, rendered)
            .replace(/!\[manifest\]/g, JSON.stringify(manifest))
            .replace(/!\[src\]/g, `src="index.tsx"`)
    )
})

app.get("/plugin/:id/:path", (req, res) => {
    res.sendFile(req.params.path, {
        root: `${__dirname}/plugins/${req.params.id}`
    })
})

const port = process.env.PORT || 3001;

app.listen(port)

module.exports = app