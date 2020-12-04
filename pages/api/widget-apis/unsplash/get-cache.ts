import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default (req: NextApiRequest, res: NextApiResponse) => {
    axios.get(`https://api.unsplash.com/photos/random?collections=67042424&count=50&orientation=landscape`, { headers: {
        authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
    } })
        .then(resp => {
            const images = { 
                images: resp.data.map((i: any) => { return { 
                    id: i.urls.raw.split("https://images.unsplash.com/photo-")[1].split("?ixid=")[0],
                    p: i.links.html.split("/photos/")[1], 
                    l: i.location.name, 
                    lp: [
                        i.location.position.latitude, 
                        i.location.position.longitude
                    ], 
                    usn: i.user.username, 
                    n: i.user.name 
                } }),
                ix: resp.data[0].urls.raw.split("?ixid=")[1].split("&ixlib")[0]
            }
            res.send(images)
        })
        .catch(e => console.log(e))
}
