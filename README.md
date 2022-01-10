# Sainsbury's Node/TypeScript back-end test

## Instructions

We have created an API which returns data for movies based on a search query. A user can search for e.g. `the simpsons`
and will get back the ID, title and overview for each match.

We use [TMDb REST API](https://www.themoviedb.org/documentation/api) as a data source. The API key
`c857fa67fba523ad3ce66df18e7ab279` has already been created for use in the task.

The goal of the task is to extend the API with the following features:

1. Add support for searching for TV shows only
   - Response should include:
     - ID
     - Title
     - Overview
2. Add support for searching both TV and movies
   - Respond with same as above but with an additional "type" field to differentiate results
3. Add the IMDB URL for each item in the search results

Additionally, please bear in mind the following improvements and changes which you may also implement:

- Add type definitions for TMDB API search results, our own response type, anywhere else you see fit
- Refactor the search request so the API key is not hardcoded
- Add error handling e.g. when there are no results, when there is a network error, invalid query or API key, etc
- Improve reliability of tests
- Result pagination
- Cache search results

Please feel free to suggest and make any other improvements you can identify.

### Request examples

- `http://localhost:3000/?query=The%20Simpsons`
- `http://localhost:3000/?type=movies&query=SpongeBob`
- `http://localhost:3000/?type=tvshows&query=The%20Office`

## Architecture

The API is powered by a lambda function which is behind API Gateway. The function is configured and deployed by the
[Serverless framework](https://www.serverless.com/framework/docs).

## Running the server

You can start the server with `yarn start`. It should watch for changes and restart when files are changed.

## Testing

Jest is installed. Feel free to use any other test runner or testing tools if you prefer.

You can run `yarn test` to start the test runner in watch mode.

## Notes

We use Yarn for dependency management. You can refer to [this handy cheatsheet](https://devhints.io/yarn) if you're more
familiar with NPM.

You can use any library, framework, etc that you like. There's no right or wrong way to complete the task.

We're not looking for you to implement this in any particular way. The test is to get to know how you solve problems,
the kind of considerations you make when writing code, how you communicate, etc. Treat the task like you would your
everyday work. Don't stress about implementing every single thing: it's probably impossible to finish this whole task!

**The most important piece of advice is to talk about what you're doing, why you're doing it, any caveats/trade-offs
you're making, etc. Please ask questions if anything is unclear: this is a collaborative task, not a passive
observation!**
