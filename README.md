Experiments in rendering maps using Mapbox GL with React.

2 components:
- `VanillaMap` is using the Mapbox GL API and following [React's docs](https://facebook.github.io/react/docs/react-component.html) for integrating with other libraries
- `WrappedMap` is using a special wrapper component [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl)

By rendering two components with the same data in different ways, I'm comparing the shape of state/props and control over/ease of adding features.

More context:
- [Mapbox's take on React](https://www.mapbox.com/blog/mapbox-gl-js-reactive/)
- [react-mapbox-gl tutorial](https://medium.com/@alex_picprod/an-efficient-webgl-map-with-mapbox-gl-js-and-react-mapbox-gl-4ac7f3d41570#.c8yca7pfq)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install
```
git clone https://github.com/jessicamcinchak/mapbox-react-sandbox.git
cd mapbox-react-sandbox
npm install
```
I'm using node ^7 and npm ^4

## Create React App Folder Structure

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
