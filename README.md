# William Shakespeare Reviews

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts
- `yarn start`: to launch the local server http://localhost:3000/
- `yarn test`: runs test suites

## App Guide
- Copy `.env.example` and set `REACT_APP_SHAKESPEARE_API_KEY`

```bash
cp .env.example .env
```
- run `yarn` to install dependencies
- run `yarn start` and go http://localhost:3000/
- google search "William Shakespeare"
- find "William Shakespeare" reviews! :)

## Technologies/Libraries
- `create-react-app` was used to bootstrap the react app for rapid dev.
- `testing-library` was used for some dom, unit testing.
- `material-ui` was used to for layouts, icons, and other various components. I've never used it before and I wanted to test it out. Definitely different than `bootstrap`.
- `axios` was used to create a custom `useApi` hook just because I'm used to it. But now I think about it, `fetch` would have been just fine.
- `ramda` was used to deep clone data. I don't think I used it anywhere else besides that. Recently got to know this library and it seems to promote functional programming.
- `react-window` was used to efficiently render virtualized list since I didn't know how many rows the API was going to return, and pagination was not available.
- `prop-types` was used for prop validation. Did not want to use `TypeScript` for this small project.
- `scss.modules` was used to ensure independent css. I also like using `styled-components`.

## What I learned / Regrets / Final Words
- I personally think it's difficult to write non-fragile front-end tests(especially for async custom hooks). I should have spent more time on writing those and implementing some snapshot testing.
- I learned that I don't know how to build a react application from scratch without using `create-react-app`. I spent quite a bit of time trying to set everything up from scratch, installing `babel` and `webpack` and configuring them. I ended up using `create-react-app` but now I think I leared enough to build it from scratch.
- I regret spending too much time on the front-end design instead of spending more time on testing.
- You will probably find some non-responsive components in the app. Blame my incompetence in `material-ui`.
- Finally, thank you for taking time to review my app -- I know time is valuable for everyone. It was really fun building this application. I am looking forward to talking to you soon. Thanks.