# Sainsbury's Node/TypeScript back-end test

## Instructions

Create an API which returns a list of movies or TV shows based on a search query.

You can use [TMDb REST API](https://www.themoviedb.org/documentation/api) as a data source. The API key
`c857fa67fba523ad3ce66df18e7ab279` has already been created for use in the task.

1. Add support for searching for movies only
   - Response should include:
     - ID
     - Title
     - Overview
2. Add support for searching for TV shows only
   - Response should include:
     - ID
     - Title
     - Overview
3. Add support for searching both TV and movies
   - Respond with same as above but with an additional "type" field
4. Implement a cache
5. Add a "runtime" field to the response

### Request examples

- `/?query=The%20Simpsons`
  - Should return matching TV shows and movies
- `/?type=movies&query=SpongeBob`
  - Should return only movies
- `/?type=tvshows&query=The%20Office`
  - Should return only TV shows

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
