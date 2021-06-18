const crypto = require('crypto')

export const JSONToQueryString = (fields) => {
    let queryArray = Object.keys(fields).map((key) => 
        `${encodeURIComponent(key)}=${encodeURIComponent(fields[key])}`
    )

    return queryArray.join('&');
}

export const signature = (data, key) => crypto.createHmac('sha256', key).update(data).digest('hex')

export const isEventResponseDelayed = (message, maxDelay) =>{
    if (!message.e || message.e != "executionReport") {
      return
    }

    if(!message.E){
      throw "Event Time is not defined"
    }

    let eventTime = message.E  
    let orderId = message.i

    // let creationTime = message.T
    // let delayTime = eventTime - creationTime
    
    if(eventTime > maxDelay){
      log.success(`There was a delay of ${eventTime-maxDelay} ms, for the order with id: ${orderId ? orderId : "unknown"}, with the status: ${message.X}`)
      return true
    }

    return false
}