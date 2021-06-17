import axios from "axios"
import AxiosError from "../errors/AxiosError.js"
import {apiKey} from "../config/config"
console.log(apiKey)
export default {
    _url: "https://testnet.binance.vision/api/v3",
    headers: {
        headers: {
            "X-MBX-APIKEY": apiKey,
            "Content-Type": "x-www-form-urlencoded"
        },
    },
    getKey() {
        return axios.post(`${this._url}/userDataStream`, null, this.headers).then(result => {
            this.listenKey = result.data.listenKey
            return Promise.resolve(this.listenKey)
        }).catch(error => AxiosError(error))
    }
}

// extendKey()
// 1000 * 60 * 45