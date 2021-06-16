require('dotenv').config()
const config = require("./config/config")
const rest = require("./con/rest")
const socket = require("./con/socket")
const log = require('./helper/log')

rest.getKey().then(listenKey => {
  socket.create(listenKey,checkMessageTiming);
}).catch(err=>{
  log.failure(err.msg)
})

const checkMessageTiming = (message)=>{
  try{
    let eventTime = message.E
    let creationTime = message.T
    let delayTime = eventTime - creationTime
    
    if(delayTime > config.maxDelay)
      console.log(`There was a delay of ${delayTime} ms, for the followining order:`, message)
    else
     console.log(`Delay is ${delayTime} ms, which is less than ${config.maxDelay}`)
  }catch(err){
    log.failure("Event time does not exist")
  }

}