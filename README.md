# weather

### Generator
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## About
It is a two view weather dashboard. 

The first view displays the weather at the users current location in green. It also displays the weather for user selected locations in blue.

Users can add new locations for which to display weather by clicking the green "+" button, then using the typeahead field in the modal to search the desired location.

The second view displays the ten day weather forecast for a selected location.

A user may select a location to view its forecast by clicking the forecast button below the weather information for that location.

To return to the dashboard view from the forecast view the user must click the 'return' button at the top of the view.

## API consumption
This application relies on information from several open web APIs.

Two RESTful url's are used to access Yahoo's geo and weather APIs respectively via YQL.

ipinfo.io's REST endpoint is consumed for location data pertaining to a user's IP address (This is the app's geolocation method).

The typeahead search bars consumes Google's geo REST API for address information.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
