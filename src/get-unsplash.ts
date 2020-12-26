import { Attribution } from "../components/types"
import axios from 'axios';

export const getUnsplash = async () => {
    const { data: image } = await axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, {
        headers: {
            authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
        }
    })

    if(image) {
        const attribution: Attribution = {
            p: image.links.html,
            l: image.location.name, 
            lp: [
                image.location.position.latitude, 
                image.location.position.longitude
            ], 
            usn: image.user.username, 
            n: image.user.name 
        }

        const b64 = await axios
            .get(image.urls.raw + `&w=2560`, {
                responseType: 'arraybuffer'
            })
            .then(response => [Buffer.from(response.data, 'binary').toString('base64'), response.headers['content-type']])
        
        return {
            background: `data:${b64[1]};base64,` + b64[0], 
            attribution: attribution
        }
    }
}