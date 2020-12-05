import { Attribution } from "../components/types"
import axios from 'axios';

export const getUnsplash = async () => {
    const { data: image } = await axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, { headers: {
        authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
      }})
    
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
        
        return {
            props: { background: image.urls.raw + "&w=1920", attribution: attribution }
        }
    }
}