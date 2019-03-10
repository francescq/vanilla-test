# vanilla-test
VannillaJS application simulating a reporting app.
It does not use any framework neither dom manipulatin tool.

It simulates a backend using json-server, a small server that answers with the content of a json file.

The application:
* App renders with no data loaded yet
* Load the data from the apis and return it to the controller
* App is rendered again with the data

# Setup
Get it
```
git clone git@github.com:francescq/vanilla-test.git
cd vanilla-test
```
Install
```
npm install
npm install -g json-server
```
Running the tests
```
npm run test
```
Running the app
```
npm start
```

# Tools
* webpack
* axios
* jest + babel
* json-server
* scss
