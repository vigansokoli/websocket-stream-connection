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
    let orderId = messsage.i
    // let creationTime = message.T
    // let delayTime = eventTime - creationTime
    
    if(eventTime > config.maxDelay)
      console.log(`There was a delay of ${eventTime} ms, for the order with id: `, orderId)

  }catch(err){
    log.failure(err)
  }

}