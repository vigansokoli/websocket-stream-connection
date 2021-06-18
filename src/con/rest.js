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
        let data = {
            symbol: "BTCUSDT",
            type: "MARKET",
            // timeINForce:"GTC",
            quantity: "0.01",
            timestamp: Date.now(),
            side: "BUY"
            // price:"9000"
        }

        let queryData = JSONToQueryString(data)

        console.log(queryData)

        return axios.post(`${this._url}/order?${queryData}&signature=${signature(queryData,secretKey)}`, null , this.headers).then(message => {
            console.log(message.data)
            return Promise.resolve(message.data)
        }).catch(error => AxiosError(error))
    }
}

// extendKey()
// 1000 * 60 * 45
// const shit = {
//     symbol: "BTCUSDT",
//     type: "LIMIT",
//     timeINForce:"GTC",
//     quantity:"0.01",
//     price:"9000"
// }

// {{url}}/api/v3/order?symbol=BTCUSDT&side=SELL&type=LIMIT&timeInForce=GTC&quantity=0.01&price=9000&newClientOrderId=my_order_id_1
// timestamp={{timestamp}}&signature={{signature}}