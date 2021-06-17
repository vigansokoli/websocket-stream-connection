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
    let eventTime = message.E  
    let orderId = message.i

    // let creationTime = message.T
    // let delayTime = eventTime - creationTime
    
    if(eventTime > config.maxDelay)
      log.success(`There was a delay of ${eventTime-config.maxDelay} ms, for the order with id: ${orderId ? orderId : "unknown"}`)
}

