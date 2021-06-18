
import log from "./log"

export default function isEventResponseDelayed (message, maxDelay){
      if (!message.e || message.e != "executionReport") {
        return
      }

      if(!message.E){
        throw "Event Time is not defined"
      }

      if(!message.T){
        throw "Creation Time is not defined"
      }      
  
      let eventTime = message.E  
      let orderId = message.i
      let creationTime = message.T
      let delayTime = eventTime - creationTime
      
      if(delayTime > maxDelay){
        log.notice(`The delay time: ${delayTime} > ${maxDelay}ms : Max Delay for the orderId: ${orderId ? orderId : "unknown"}`)
        return true
      }

      return false
}