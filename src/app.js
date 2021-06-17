import config from "./config/config"
import rest from "./con/rest"
import socket from "./con/socket"
import log from './helper/log'
import isEventResponseDelayed from './helper/isEventResponseDelayed'

rest.getKey().then(listenKey => {
  socket.create(listenKey,(message) =>{isEventResponseDelayed(message, config.maxDelay)});
}).catch(err=>{
  log.failure(err.msg)
})