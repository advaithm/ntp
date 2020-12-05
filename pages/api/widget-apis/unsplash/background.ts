import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default (req: NextApiRequest, res: NextApiResponse) => {
    axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, { headers: {
        authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
    } })
        .then(resp => {
            res.redirect(301, `${resp.data.urls.raw.split("?")[0]}?w=1920`)
            const i = resp.data
            const attribution = {
                l: i.location.name, 
                lp: [
                    i.location.position.latitude, 
                    i.location.position.longitude
                ], 
                usn: i.user.username, 
                n: i.user.name 
            }
            res.send({ src: `${i.urls.raw.split("?")[0]}?w=1920`, attribution: attribution })
        })
        .catch(e => console.log(e))
}
