# Sainsbury's Marketing back-end test

## INSTRUCTIONS

The test asks you to create a Serverless API endpoint that returns a list of movies or tv shows based on a search query.

You can use [TMDb REST API](https://www.themoviedb.org/documentation/api) to search and fetch movies. You can use `c857fa67fba523ad3ce66df18e7ab279` for the API key.

### Request examples

- `/media_search?query=Scott%20Pilgrim`
- `/media_search?type=movies&query=Hitchhiker's%20Guide`
- `/media_search?type=tvshows&query=The%20Office`

Other functionality like caching or filtering by popularity/votes/etc. could be implemented as well

### Notes

- The use of any library is allowed
- For easier set up, many libraries have already been installed
- Some of this libraries are already configured too

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the api in the development mode.

Open http://localhost:3000 to view it in the browser.

The api will reload if you make code changes.

### `yarn test`

Launches the test runner in the interactive watch mode.

Use `yarn test:ci` to run all the tests and exit.
