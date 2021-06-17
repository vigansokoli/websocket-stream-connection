const config = require("./config/config")
const rest = require("./con/rest")
const socket = require("./con/socket")
const log = require('./helper/log')

rest.getKey().then(listenKey => {
  socket.create(listenKey,checkMessageTiming);
}).catch(err=>{
  log.failure(err.msg)
})

const checkMessageTiming = (eventTime)=>{
    // let eventTime = message.E  
    // if(!eventTime){
    //   throw("Event Time is undefined")
    // }

    // let creationTime = message.T
    // let delayTime = eventTime - creationTime
    
    if(eventTime > config.maxDelay)
      log.success(`There was a delay of ${eventTime} ms, for the order with id: ${orderId ? orderId : "unknown"}`)
}

