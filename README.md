# the win jar 🏆

A project to celebrate the small wins that create the bigger successes. 

Grown from an entry to the AWS Amplify x Hashnode Hackathon - you can read more [here](https://www.nicoleintech.com/the-win-jar-hacking-our-positive-psychology-and-building-with-aws-amplify).

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
- Add a win
- Remove a win
- View your wins when you log back in
- Accessibility considerations, e.g. keyboard navigable

## Future improvements 🔮
### Features
- The user can edit wins
- The user can log in with SSO successfully
- The wins are hidden until the user clicks 'open win jar'
- The user sees a toast notification when a win is added successfully or error
- The user see's confetti when they add a win
- The user can 'lock' their win jar access - so they can add wins but only open it on a certain date (e.g. New Year, anniversary, X months in the future)
- The user can set reminders to add a win (help with habit building)
- The user can have multiple jars for different contexts (e.g personal, work)
- Users can have shared win jars (e.g. for teams, families, friends)
- The user can share wins to socials e.g. Twitter after adding them
- The user can view statistics about their wins (e.g. win streak (like habit tracking))
- The dashboard displays a random win from the past (like Facebook memories, 'hey remember this? go you!!')
- The user can select and export their wins in a format that can be shared - (e.g. might be useful in a work setting when it comes to performance appraisals so you can share with your manager)
- Allow user to have and update profile and have personalisation in UI, e.g. 'Hello {FIRST_NAME}'

### Technical / Project
- Disable 'add win' if there is no text input
- Add interaction/code tests with Playwright/Jest
- Fix Google SSO sign in redirects
- Customise Amplify Authenticator to match app styling
- Have a dedicated landing page with more info about the product and where they can click to go through to a dedicated signup / sign-in page or modal

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
