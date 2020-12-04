import axios from "axios"
import localforage from "localforage"

const url = "http://localhost:3002/api/widget-apis/unsplash/get-cache"

export const getBackground = () => {
  return new Promise(async (resolve, reject) => {
    localforage.getItem("background-cache").then((imageList: any) => {
      const image = imageList[0]

      if(image == null || Date.now() >= image.exp) return resolve(getFreshBackgrounds())

      resolve(image)
    }).catch((err) => {
      console.log(err)
      getFreshBackgrounds()
      resolve(true)
    });
  })
}

export const getFreshBackgrounds = () => {
  return axios.get(url)
    .then(async res => {
      return res.data.images[0]
    })
}

const addToCache = (image: object) => {
  return new Promise((resolve, reject) => {
      const exp = Date.now()+15*60*1000

      localforage.setItem("background-cache", { exp, data: image }).then(data => resolve(data)).catch((err) => {
        console.log(err);
        reject(err);
      });
  })
}