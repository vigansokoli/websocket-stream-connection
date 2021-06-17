const WebSocket = require("ws")
const {
  streams,
  url
} = require('../config/config')

const log = require("../helper/log")

module.exports = {
  _url: url,
  _ws: "",
  create(path, callback) {
    this._ws = new WebSocket(`${this._url}${path}`)
    this._ws.on('open', () => {
      log.notice("WEBSOCKET OPEN")

      if (streams.length > 0) {
        this._ws.send(JSON.stringify({
          id: 1,
          method: "SUBSCRIBE",
          params: streams
        }))
      }

      this.heartbeat();
    })

    this._ws.on('pong', () => {
      log.notice('RECEIVED: Pong');
    });

    this._ws.on('ping', (data) => {
      log.notice('RECEIVED: Ping ');
      this._ws.pong(data);
    });

    this._ws.on('message', (data) => {
        try {
          const message = JSON.parse(data)
          if (message.e && message.e == "executionReport") {

            if(!message.E){
              throw "Event Time is not defined"
            }

            callback(message)
          }

        } catch (err) {
          log.failure(`Parsing message failed: ${err}`)
        }
      }),

      this._ws.on('error', (error) => {
        log.failure("ERROR", error);
        // node.js EventEmitters will throw and then exit if no error listener is registered
      });

    this._ws.onclose = (data) => {
      log.notice('ws closed', data);
    };
  },
  heartbeat() {
    log.notice("PING SERVER");
    this._ws.ping();

    setInterval(() => {
      if (this._ws.readyState === WebSocket.OPEN) {
        this._ws.ping();
        log.notice("PING SERVER");
      }
    }, 30 * 60 * 1000);
    // A ping refresh every 30 minutes, the listenKey lasts for an hour so this will do the trick
  },
}