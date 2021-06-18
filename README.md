Running Instructions for the Websocket
==============

# *Pre-requirements*
Go to .env and input the required credentials. More instructions can be found there

# RUN THE WEBSOCKET EXECUTION REPORT LISTENER AND A SPOT ORDER EVERY TWO SECONDS.

rename .env.example to .env and give the required information in it. There are instructions there.
npm install
npm start

# RUN ONLY A SINGLE SPOT ORDER
npm run-script spot


# RUN THE WEBSOCKET EXECUTION REPORT LISTENER
npm run-script socket
