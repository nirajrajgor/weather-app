# Weather app
The goal was to experience all the steps involved in product building. Ranging from ideation, design, development, testing and deployment.

I started by researching on Dribbble and Behance and went through many sample weather app designs. After research i got the rough idea on design and decided to use adobe xd for UI design.

It took many iteration before getting the final design. Once the design was complete i used react as the underlying development technology and finally deployed using Github pages.

It uses [open weather api](http://openweathermap.org/) to show current weather, forecast and [unsplash](https://unsplash.com/) api to show picture related to that city. User can type city name to get the data and yes it's **Mobile Responsive** as well.
</br></br>
![Weather App homepage](./public/weather-app-homepage.jpg?raw=true)

Did you find this repo helpful? Please put a **Star** to show your support!

### [View Demo](https://nirajrajgor.github.io/weather-app/)

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
