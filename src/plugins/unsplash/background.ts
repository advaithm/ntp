import axios from "axios"

export const getBackground = () => {
    const url = process.env.NODE_ENV == "development" ? "http://localhost:3000/integration/unsplash/daily-wallpaper" : "/integrations/unsplash/daily-wallpaper"

    return axios.get(url).then(d => d.data)
}

export const getBackgroundAsBase64 = async () => {
    const url = process.env.NODE_ENV == "development" ? "http://localhost:3000/integration/unsplash/daily-wallpaper" : "/integrations/unsplash/daily-wallpaper"

    const image = await axios.get(url).then(d => d.data.url);

    return axios.get(image, { responseType: "arraybuffer" }).then(d => {
        const { data } = d;

        const base64 = `data:${d.headers["content-type"]};base64,` + Buffer.from(data).toString("base64");

        return base64;
    })
}