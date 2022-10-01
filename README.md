# the win jar 🏆

A project to celebrate the small wins that create the bigger successes. 

[thewinjar.app](https://thewinjar.app)

Grown from an entry to the AWS Amplify x Hashnode Hackathon - you can read more [here](https://www.nicoleintech.com/the-win-jar-hacking-our-positive-psychology-and-building-with-aws-amplify).

### Demo video

https://user-images.githubusercontent.com/70478809/193430209-de2469d5-354e-4d38-ae9d-dea1d5129ed2.mov


## Technology used:

- React (CRA)
- TypeScript
- Tailwind CSS
- Material UI
- Storybook
- AWS Amplify Studio
- AWS Cognito
- AWS Amplify Hosting
- AWS Route53


## Current Features 👩🏻‍💻
- Create an account/sign in with your own Win Jar Account
- Google SSO
- Add a win
- Remove a win
- View your wins when you log back in
- Accessibility considerations, e.g. keyboard navigable

## Future improvements 🔮
### Features
- The user can edit wins
- The user can 'lock' their win jar access - so they can add wins but only open it on a certain date (e.g. New Year, anniversary, X months in the future)
- The user can set reminders to add a win (help with habit building)
- The user can have multiple jars for different contexts (e.g personal, work)
- Users can have shared win jars (e.g. for teams, families, friends)
- The user can share wins to socials e.g. Twitter after adding them
- The user can view statistics about their wins (e.g. win streak (like habit tracking))
- The dashboard displays a random win from the past (like Facebook memories, 'hey remember this? go you!!')
- The user can select and export their wins in a format that can be shared - (e.g. might be useful in a work setting when it comes to performance appraisals so you can share with your manager)
- The user can search through their wins
- The wins can be assigned tags
- The user can filter their wins by certain parameters e.g. date, tags
- Allow user to have and update profile and have personalisation in UI, e.g. 'Hello {FIRST_NAME}'

### Technical / Project
- Disable 'add win' if there is no text input
- Add interaction/code tests with Playwright/Jest
- Fix Google SSO sign in redirects
- Customise Amplify Authenticator to match app styling
- Have a dedicated landing page with more info about the product and where they can click to go through to a dedicated signup / sign-in page or modal

## Available Scripts

Run `yarn install` to install dependencies

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn storybook`

Runs the Storybook locally

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


