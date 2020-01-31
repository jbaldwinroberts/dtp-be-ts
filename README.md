# Sainsbury's marketing back-end Test

## INSTRUCTIONS

The test consists on the creation of a Serverless API endpoint that returns a list of movies or tv shows based on a search query.

You can use [TMDb REST API](https://www.themoviedb.org/documentation/api) to search and fetch movies. As API key you can use `c857fa67fba523ad3ce66df18e7ab279`.

### Request examples

`/movie_search?query=Scott%20Pilgrim`<br>
`/movie_search?type=movies&query=Hitchhiker's%20Guide`<br>
`/movie_search?type=tvshows&query=The%20Office`<br>

Other functionality like caching or filtering by popularity/votes/etc. could be implemented as well

### Notes

- The use of any library is allowed.
- For easier set up, many libraries have already been installed.
- Some of this libraries are already configured too.

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the api in the development mode.<br>
Open http://localhost:3000 to view it in the browser.

The api will reload if you make code changes.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
Use `yarn test:ci` to run all the tests and exit.

## Bonus points

- Use typescript
- Async parallel requests to the API
- Testing
- Input validation
- Proper error handling + http status codes
