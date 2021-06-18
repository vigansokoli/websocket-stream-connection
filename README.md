Running Instructions for the Websocket
==============

# *Pre-requirements*
1. Go to .env and input the required credentials. More instructions can be found there
2. Run : npm install

# OPTION 1: RUN THE WEBSOCKET EXECUTION REPORT LISTENER AND A SPOT ORDER EVERY TWO SECONDS AUTOMATICALLY, BECOME A "BUY" ORDER FROM "SELL" WHEN THE INSUFFICIENT BALACE ARRIVES.
npm start

# OPTION 2: RUN ONLY A SINGLE SPOT ORDER
npm run-script spot


# OPTION 3: RUN THE WEBSOCKET EXECUTION REPORT LISTENER
npm run-script socket
