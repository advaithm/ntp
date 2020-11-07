import { getBackground, getBackgroundAsBase64 } from "./background";

export const unsplashPlugin = {
    name: "Unsplash",
    author: "Kieran <kieran@dothq.co>",
    api: {
        getBackground,
        getBackgroundAsBase64
    }
}