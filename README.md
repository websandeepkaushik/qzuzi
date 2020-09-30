# qzuzi

react repo for the qzuzi

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Development

## Running the app locally

1. Install js dependencies: `yarn install`
2. Run the project: `yarn start`

## Structure

We're using `redux` for state management and `redux-saga` for asynchronous actions e.g. api requests.

The bulk of the code is in the `app` directory.

| location       | contents                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------ |
| src/App.js     | Entrypoint for the app                                                                           |
| src/api        | API interaction                                                                                  |
| src/components | lower level components, e.g. LeftSidebar, MainContent, Header, CartIcon etc.                     |
| src/pages      | components representing entire screens within the app, where integration with redux would happen |
| src/state      | redux reducers/actions/selectors. Combined in `index.js`                                         |
| src/sagas      | `redux-saga` sagas, forked from the root saga in `index.js` to run in parallel.                  |
