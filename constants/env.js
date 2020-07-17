import { AsyncStorage } from "react-native"

export const SERVER_URL = "slimeserver.herokuapp.com"
export const SERVER_PORT = "80"
export const envGenerator = async() => {
  return AsyncStorage.getItem("nomor")
    .then(nomor => {
      return fetch("http://sl-aliceblue.herokuapp.com/route?nomor=" + encodeURIComponent(nomor))
        .then(data => {
          return data
        })
    })
}