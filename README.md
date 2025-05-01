My portfolio as a software developer, wrote in React.

## Made using

React, Vite, Styled Components, React Testing Library for Component testing and Cypress for E2E testing.

## How to run

You will need to create a .env.local file in the root of this project via:

```bash
$ touch .env.local
```

Then fill that with the needed environment variables:

```
VITE_API_URL=http://localhost:3000
```

`npm start` - this will run the website locally on http://localhost:5173

## How to build

`npm run build` - this will build the site for production, the output will be placed in the /build/ folder.

## How to run the production built site locally

`npm run serve` - this will run the site that has been built in /build/ from the above command.

# End to end tests

`npm run cy:run` - this command will run all of the end to end tests against http://localhost:5173, note: you will need to have the website running before you run this command

`npm run cy:open` - this command will open a UI interface to run the end to end tests so you can visually see the tests running, note: you will need to have the website running before you run this command on http://localhost:5173

`npm run cy:chrome` - this command is just a helper to run the end to end tests on chrome and in headless mode

`npm run cy:test` - this is the command you want, this will start the website using `cy:start`, check it is running on http://localhost:5173 and then run the end to end tests using the command `cy:chrome`. This should be the only command you need to run the tests but the above commands can help with debugging tests.
