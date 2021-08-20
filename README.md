![24hr temp chart app banner](https://i.ibb.co/PrdGb3h/github-readme-charts-banner.png)

### [Link to live site](https://24hourchart.darshdhillon.co.uk/)

## App overview

24-hr Charts displays the previous 24 hours' temperatures for selected major cities across the globe. There is also an option to get data for the user's current location.

The data is fetched from the openweathermap API in the form of an app generated Unix timestamp of the current date minus 24 hours. London, UK is the default fetch called, and the data is rendered using the [chartjs](https://www.chartjs.org/) library.

## Features

- Redux asynchronous actions via Thunk middleware
- Google Maps reverse geocoding to obtain the user's location in combination with the browser navigator API
- Option to display horizontal and vertical bar charts, or a line graph
- Custom markup and styling with React and SASS (no UI or styling libraries such as Material UI, Bootstrap etc.)
- PropTypes addition for all relevant components
- Fully responsive for desktop, tablet or mobile

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Install the necessary dependencies, and then start the application:

```sh
npm install
npm start
```

## Notes

Relevant and active keys for both the openweathermap and Google geocoding APIs will be required for the app to function.

![App snapshot](https://i.ibb.co/kG7MPdw/Readme-upload.png)
