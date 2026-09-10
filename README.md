# Mental Health Questionnaire — React Prototype

An educational **React questionnaire interface** with animated questions and a local scoring routine. Despite the repository name, the source uses predefined question weights, not a trained prediction model or a backend inference API.

## Run locally

Use Node.js and npm, then run from the repository root:

```sh
npm ci
npm start
```

Open `http://localhost:3000`. The application uses React 17 and Create React App 4 tooling; no Node.js version is pinned. Compatibility work may be needed on newer environments.

## Application flow

- `/` displays the home screen.
- `/quiz` presents the questionnaire, with general and selected-category modes.
- Answers are compared against predefined weights in the browser.
- The highest scoring category above the configured threshold supplies the result content.

This scoring is an application demonstration, not a clinically validated diagnosis. The repository does not contain model-training data, clinical validation, or evidence of diagnostic accuracy.

## Where to make changes

| Path | Purpose |
| --- | --- |
| [src/App.js](src/App.js) | Browser routes. |
| [src/components/Home](src/components/Home) | Introductory screen. |
| [src/components/Quiz/Quiz.js](src/components/Quiz/Quiz.js) | State, scoring, and result rendering. |
| [src/components/Quiz/LocalConstants.js](src/components/Quiz/LocalConstants.js) | Questions, category weights, and content. |
| [src/components/QuizAnswer](src/components/QuizAnswer) | Answer interaction. |
| [src/components/reusable/ProgressBar](src/components/reusable/ProgressBar) | Progress display. |

The application content remains in its original language; this update translates the repository documentation.

## Build and checks

`npm run build` produces the static `build` directory. A static host must route requests such as `/quiz` back to `index.html` for BrowserRouter navigation.

`npm test` launches the test runner. The existing [src/App.test.js](src/App.test.js) still looks for the default Create React App “learn react” text and does not validate questionnaire scoring. Tests and a production build were not run for this documentation-only update. The old Heroku demo is not used as evidence of a working deployment.
