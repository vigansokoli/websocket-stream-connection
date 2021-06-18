import rest from "./con/rest"
import log from './helper/log'

rest.spotOrder().then(message => {
    log.success(JSON.stringify(message))
}).catch(err => {
    log.failure(err)
})