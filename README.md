This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# React/Redux App Skeleton

## Installation and run server
1. `npm install`
2. `npm start`

## Directory Structure

### SRC
#### actions
- example action
  - example thunk action creator
  - example action to search movie from themoviedb.
#### components
- example folder
  - example container
  - example component
- `App.js`
  - Contains routing information
- `root.js`
  -wraps `App.js` with `<Provider/>` and `<BrowserRouter/>`
#### reducers
- root reducer
- example reducer
#### store
- singular store, created with thunk and logger middleware
#### util
- contains example API call to themoviedb
#### index.js
- Entry point of the SPA, initializes redux store into `root.js`, mounting it onto div with id=root
