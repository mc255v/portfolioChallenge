
## Available Scripts

This application was bootstrapped with create-react-app. 

This command will start the development server and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```bash
  $ yarn start
```

To build for deployment, please use:
```bash
  $ yarn build
```

This command will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into the project so you have full control over them.
```bash
  $ yarn eject
```

## Testing
This application uses Jest / Enzyme for testing. To run those tests, please use:
```bash
  $ yarn test 
```

## Technical Implementation Details
- **React** - React was used in this application, integrated with react-redux. All components are implemented as functional components, with component state handled by redux and local state is only used in cases where it makes sense.

- **Redux / State Management / Redux-Thunk** - As mentioned above, Redux is used for component state management. Redux-Thunk is used for asynchronous actions (data fetching, mainly). 

- **Styling** - This application implements the BEM pattern in SCSS, with separate SCSS files for each main component folder. Boostrap was used as quick implementation for a Modal in place of creating one from scratch with a portal. 

- **Testing** - The tests implemented in this app focus on rendering, interactions and Redux using Jest and Enzyme. All actions were tested, but due to time constraints, only one part of the reducer, and one component was tested.

## Assumptions / Additional Notes
Unfortunately due to time constraints I wasn't able to implement SSR or a browsing history page (works, creators, etc). I was planning to implement a fuzzy search as well. The "Need to have" section was completed.
I attempted to duplicate the orignal source as best as possible within my time constraints and only deviated when neccesary for quicker implementation.

 