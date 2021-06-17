const axios = require("axios")
const AxiosError = require("../errors/AxiosError.js")
const {apiKey} = require("../config/config")
const url = "https://testnet.binance.vision/api/v3"
const log = require("../helper/log")

module.exports = {
    headers: {
        headers: {
            "X-MBX-APIKEY": apiKey,
            "Content-Type": "x-www-form-urlencoded"
        },
    },
    getKey() {
        return axios.post(`${url}/userDataStream`, null, this.headers).then(result => {
            log.notice("ListenKey retrieved")
            this.listenKey = result.data.listenKey
            return Promise.resolve(this.listenKey)
        }).catch(error => AxiosError(error))
    }
}

// extendKey()
// 1000 * 60 * 45