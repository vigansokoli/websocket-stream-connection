import axios from "axios"
import AxiosError from "../errors/AxiosError.js"
import {
    apiKey,
    secretKey
} from "../config/config"
import {
    signature,
    JSONToQueryString
} from "../helper/requests.js"

export default {
    _url: "https://testnet.binance.vision/api/v3",
    isSell: true,
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
    },
    spotOrder() {
        let side = this.isSell ? "SELL" : "BUY"
        let data = {
            symbol: "BTCUSDT",
            type: "MARKET",
            // timeINForce:"GTC",
            quantity: "0.001",
            timestamp: Date.now(),
            side: side
        }

        console.log(side)

        let queryData = JSONToQueryString(data)

        return axios.post(`${this._url}/order?${queryData}&signature=${signature(queryData,secretKey)}`, null, this.headers).then(message => {
            return Promise.resolve(message.data)
        }).catch(error => {
            if (error.response.data.code == '-2010') {
                this.isSell = !this.isSell
                return this.spotOrder()
            } else {
                return AxiosError(error)
            }
        })
    }
}