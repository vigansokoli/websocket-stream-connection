import {
    maxDelay
} from "./config/config"
import rest from "./con/rest"
import socket from "./con/socket"
import isEventResponseDelayed from "./helper/isEventResponseDelayed"

rest.getKey().then(listenKey => {
    socket.create(listenKey, (message) => {
        isEventResponseDelayed(message, maxDelay)
    });
}).catch(err => {
    log.failure(err.msg)
})