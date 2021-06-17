import config from "./config/config"
import rest from "./con/rest"
import socket from "./con/socket"
import log from './helper/log'
import checkMessageTiming from './helper/checkMessageTiming'

rest.getKey().then(listenKey => {
  socket.create(listenKey,(message) =>{checkMessageTiming(message, config.maxDelay)});
}).catch(err=>{
  log.failure(err.msg)
})