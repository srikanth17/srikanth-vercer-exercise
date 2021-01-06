## Vercer Application

This application is built on ES6 JavaScript using React with Redux and TypeScript. I've used Create React App (saves more time in configuring the dev environment) to bootstrap this react application. Information about the _create-react-app_ & to run this application is mentioned in the later part of this document.

I've used _concurrently_, npm library to run both client and server in single localhost. This is configured in package.json file. _json-server_ will be running in port 4000.

Client - Port #3000

Server - Port #4000

## Directory Structure

All the TS code live in _/src/_ directory. _index.tsx_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

## Redux Store

This application requires information exchange between components. Redux is used to solve this. I don't want to populate _props_ by sending all the information through it. Also, by using redux store the code is clean & reusable.

Redux store is configured in _/src/store/index.ts_ & imported into '_/index.tsx_'.

## Reducers

1. Trades - Stores the trade informations
2. Filter - Stores the filter options that are available to the user.

## Components

1. App - Root application
2. Header - Renders the header part of the application
3. TradeList - Renders the list of trades corresponding to filter selections
4. TradeListItem - Single Trade
5. TradeListFilters - Shows all the available filters in the application

## Styling

I've used styled components to style the component. Added a theme.js file, which contains the color codes from the style guide. It's the single source of truth.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
