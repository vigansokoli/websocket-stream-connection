const streamsToArray = (streams)=> streams ? streams.split(' ').map(stream => stream.toLowerCase()) : ''
const validator = require('validator')
const log = require('../helper/log')

let config={
    apiKey: process.env.API_KEY,
    streams: process.env.STREAMS ? streamsToArray(process.env.STREAMS): [],
    maxDelay: validator.isInt(process.env.MAX_DELAY,{gt:0, allow_leading_zeroes:false}) ? process.env.MAX_DELAY : undefined,
}

Object.keys(config).forEach((k, i) => {
    if(config[k] == undefined){
        log.failure(`${k} is undefined in the .env file, please follow instructions and try again`)
        process.exit()
    }
});

// ^[a-z!_]+[@a-z_!]+

module.exports = config;