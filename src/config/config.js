import dotenv from 'dotenv'
dotenv.config()

import validator from 'validator'
import log from '../helper/log'

const streamsToArray = (streams)=> streams ? streams.split(' ').map(stream => stream.toLowerCase()) : ''

let config={
    apiKey: (process.env.API_KEY).length === 64 ? process.env.API_KEY: undefined,
    secretKey: (process.env.SECRET_KEY).length === 64 ? process.env.SECRET_KEY: undefined,
    streams: process.env.STREAMS ? streamsToArray(process.env.STREAMS): [],
    maxDelay: validator.isInt(process.env.MAX_DELAY,{gt:0, allow_leading_zeroes:false}) ? process.env.MAX_DELAY : undefined,
    url: validator.isURL(process.env.URL, { protocols: ['wss']}) ? process.env.URL : undefined,
}

Object.keys(config).forEach((k, i) => {
    if(config[k] == undefined){
        log.failure(`${k} is invalid. Please follow the instructions in the .env file and try again!`)
        process.exit()
    }
});

console.log(config.secretKey)

// ^[a-z!_]+[@a-z_!]+

module.exports = config;