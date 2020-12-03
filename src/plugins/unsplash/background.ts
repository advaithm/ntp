import axios from "axios"
import localforage from 'localforage';

const url = "http://localhost:5001/ntp/unsplash"

export const getBackground = async () => {
    return new Promise(async (resolve, reject) => {
        localforage.getItem("backgrounds-cache").then((value: any) => {
            if(value == null) return resolve(getFreshBackgroundList())

            const image = { image: value.data.images[0], attribution: value.data.attributions[0] }

            if(image == null) return resolve(getFreshBackgroundList())
            if(Date.now() >= value.exp) return resolve(getFreshBackground())

            resolve(image)
        }).catch((err) => {
            console.log(err)
            getFreshBackgroundList();
            resolve(true)
        });
    })
}

const getFreshBackground = () => {
    return localforage.getItem("backgrounds-cache") // get backgrounds cache
        .then((value: any) => {
            value.data.images.splice(0, 1) // delete first item of the array
            value.data.attributions.splice(0, 1)

            setCache(value.data.images, value.data.attributions) // refresh cache with next item in list


            console.log(value.data.images[0], value.data.attributions[0])
            return { image: value.data.images[0], attribution: value.data.attributions[0] } // return first item of list
        })
}

const getFreshBackgroundList = () => {
    return axios.get(url)
        .then(async res => { const attribution = JSON.parse(res.headers["x-attribution-data"]); await setCache(res.data, attribution); return { image: res.data, attribution: attribution } })
        .catch(e => {
            console.log(e)
            return ""
        })
}

const createObjectURL = (data) => {
    const blob = new Blob([data]);
    const imageURI = URL.createObjectURL(blob);

    return imageURI;
}

const setCache = (images, attributions) => {
    return new Promise((resolve, reject) => {
        const exp = Date.now()+15*1000

        localforage.setItem("backgrounds-cache", { exp, data: { images: images, attributions: attributions } }).then(data => resolve(data)).catch(function(err) {
            console.log(err);
            reject(err);
        });
    })
}

// export const getBackgroundAsBase64 = async () => {
//     const url = process.env.NODE_ENV == "development" ? "http://localhost:3000/integration/unsplash/daily-wallpaper" : "/integrations/unsplash/daily-wallpaper"

//     const image = await axios.get(url).then(d => d.data.url);

//     return axios.get(image, { responseType: "arraybuffer" }).then(d => {
//         const { data } = d;

//         const base64 = `data:${d.headers["content-type"]};base64,` + Buffer.from(data).toString("base64");

//         return base64;
//     })
// }