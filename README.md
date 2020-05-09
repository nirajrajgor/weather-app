# Weather app
A weather app which uses [open weather api](http://openweathermap.org/) to show current weather, forecast and [unsplash](https://unsplash.com/) api to show picture related to that city. User can type city name to get the data.
</br>[View Demo](https://nirajrajgor.github.io/weather-app/)

## Purpose
* Implement the concept of [redux](https://redux.js.org/).
* Implement the react-redux architecture.
* Implement the [redux-thunk](https://github.com/reduxjs/redux-thunk) along with reactjs.
* Integrate Unsplash & Openweather apis.


## Installation
Install the latest version of Node and npm then follow below commands.
```
git clone https://github.com/nirajrajgor/weather-app.git
npm i
```

## Usage

### Create `.env` file at root level to store credentials for apis
```
// Add .env file to gitignore

// For Unsplash api
REACT_APP_UNSPLASH_ACCESS_KEY=value

// For Openweather api
REACT_APP_WEATHER_APP_ID=value
```

### Development server

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Production build
```
npm run build
```

Builds the app for production to the `build` folder.

## Author

* [Niraj Rajgor](https://nirajrajgor.com/)
