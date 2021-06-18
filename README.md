#Running Instructions for the Websocket
==============

## *Pre-requirements*
1. Go to .env and input the required credentials. More instructions can be found there
2. Run the following code: <br> `npm install`
3. Procceed to one of the following options below.

### Option 1: Run the Web Socket Listener and the automatic New Spot Orders in a 2 second interval
Run the websocket and spot orders automatically and just view the execution report results. When insufficient balance is reached, the **SELL** orders are reversed to ***BUY***, for **BTCUSDT**, ***MARKET*** buys of the quantity 0.001.
Run the following code:
<br>`npm start`

### Option 2: Run a spot order
When insufficient balance is reached, the **SELL** orders are reversed to ***BUY***, for **BTCUSDT**, ***MARKET*** buys of the quantity 0.001.
Run the following code:
<br>`npm run-script spot`

### Option 3: Run the Web Socket Listener
Run the following code: <br>
`npm run-script socket`
