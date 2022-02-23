# Running the Superformula Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` / `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` / `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook` / `yarn storybook`

Launches the Storybook to display various standalone components for testing.

### `npm run build` / `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# FauxAPI local storage persistence

When the app loads, it checks to see if the HTML5 local storage
has been populated with the initial user test data. If not, it populates
the serialized data to a key called `usersData`.

To reset the data to the initial default, simply delete the entry from
local storage using the browser dev tools.
