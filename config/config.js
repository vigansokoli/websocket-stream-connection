const streamsToArray = (streams)=> streams ? streams.split(' ').map(stream => stream.toLowerCase()) : ''
const validator = require('validator')

let config={
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    streams: streamsToArray(process.env.STREAMS),
    maxDelay: process.env.MAX_DELAY,
}

// ^[a-z!_]+[@a-z_!]+

module.exports = config;