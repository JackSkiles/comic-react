This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Welcome to my comic app! 

Using this React app you are able to view the comic of the day taken from a web comic API from xkcd by Randall Munroe.

when the page loads the react calls and mounts the method that fetches the API URL for the comic of the day and passes it to State,
which is then used to load the image in HTML img elements.

There is also a search function that allows users to search for a comic by its number. When the user types the number it is handled by an onChange method that takes the input of the user and sets the state of user input accordingly. Then when submitted the user input
is added to the end of the API URL and save in State. It is then rendered to the page using img elements, similar to the comic of
the day. Enjoy searching through some funny comics!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

