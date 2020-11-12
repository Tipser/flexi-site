# Tipser Flexi Site
This project shows how the Tipser Elements components works in a React project, and is provided as is by tipser.com. The project is connected to both Contentful for CMS, and Tipser for products.

CMS content is edited directly in your Contentful account. Single products and collections are managed in the [Tipser Portal](https://app.tipser.com).

If you don't have an account at Tipser yet, please [visit us to read more](https://tipser.co/en/products/publishers/).
If you don't have a Contentful account yet, you can sign up for a [free account here](https://www.contentful.com/sign-up/) to get started.

## Demo site

The current site can be [tested here](https://sample-maxi-site.netlify.app/).

## Project Setup

To connect the project to your own accounts, you need to provide the following keys in the `/src/components/app/App.tsx file`

```
const CONTENTFUL_API_KEY = 'a read only API key, created in Contentful';
const CONTENTFUL_SPACE_ID = 'the Contentful Space ID';
const POS_ID = 'the Id of your account at Tipser';
```

The `Start Page` and `Main Menu` is controlled by the `Contentful Content Type` called `Site`, for which you need to attach the Site Id (found in Contentful).

```
const SITE_ID = 'the Site ID that is created in Contentful';
```

# Contentful preparation

## Preparation
1. Create an account at Contentful https://www.contentful.com/sign-up/
2. Make sure the default locale for the new space is English (en) "en"
3. Install the Contentful CLI: https://www.contentful.com/developers/docs/tutorials/cli/installation/
4. Use the export / import functionality of the Contentful CLI: https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/
5. Authentication with the Contentful CLI: https://www.contentful.com/developers/docs/tutorials/cli/authentication/

## Content Model Import

In the terminal, run the following to import the necessary Contentful Content Model
```
contentful login

contentful space import --content-model-only 
--space-id <new-space-ID> --content-file ./<import-file-name>.json
```

The `new-space-ID` is found in Contentful

The `import-file-name` can be downloaded here.

## Documentation

Tipser Elements config is setup using the `tipserElementsConfig` in the `/src/components/app/App.tsx file`

For documentation of Tipser Elements, see the [Tipser Elements Documentation](https://tipser.github.io/docs/#tipser-elements) for reference.

# Developing and extending
The project is built on Facebooks Create React App.

## Running locally

To run locally, run the following in the project directory:

```
npm install
npm start
```

The address [http://localhost:3000](http://localhost:3000) will be opened autoamtically when you start the development server.

The page will reload if you make edits.

## Available Scripts


### `npm start`

Starts the development server and runs the app in the development mode.

The address [http://localhost:3000](http://localhost:3000) will be opened autoamtically when you start the development server.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).