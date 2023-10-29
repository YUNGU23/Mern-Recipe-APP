# MERN Recipe App with Authentication Documentation
### Demonstration
![pic1](https://res.cloudinary.com/practicaldev/image/fetch/s--7y76l4XM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xb7o0u7mr6zc6qscyper.png)
![pic2](https://res.cloudinary.com/practicaldev/image/fetch/s--o5h4fTOW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6kdfk44dthhy57fa6hz1.png)
![pic3](https://res.cloudinary.com/practicaldev/image/fetch/s--xMVwn-NF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dkw83si4cp31r57g3jeu.png)
![pic4](https://res.cloudinary.com/practicaldev/image/fetch/s--mD6IJNHt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4cw2ni2qlpkq20088w0c.png)
![pic5](https://res.cloudinary.com/practicaldev/image/fetch/s--8GJW_ey6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c23od1k4bm72ebn8boe4.png)
![pic6](https://res.cloudinary.com/practicaldev/image/fetch/s--Pvx0pvQt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t18uxihxx4c4g0j9mow7.png)

### Introduction
This documentation provides a step-by-step guide to creating a Full Stack web application using the MERN (MongoDB, Express, React, Node.js) technology stack. The final product will be a Recipe App with user authentication.

### Prerequisites
Before you begin, make sure you have the following installed:

*Node.js*
*MongoDB*
*Visual Studio Code (or any code editor of your choice)*

### Getting Started
#### 1. Project Setup
1. Create two folders in your project directory: `client` and `server`.

#### 2. Client Setup
1. Install Yarn globally: `npm install -g yarn`.
2. In the `client` directory, create a React app: `yarn create react-app`.

Bug:
If you encounter issues, follow these steps to debug:
2.1 Install Yarn globally: `npm install -g yarn`.
2.2 Add Yarn's path to your system environment variables.

#### 3. Server Setup
1. In the `server` directory, initialize your Node.js project: `yarn init` (accept the default options).
2. Install required server dependencies:
*`yarn add express cors bcrypt jsonwebtoken mongoose`*
*`yarn add --dev nodemon`*
3. Create a `src` folder in the `server` directory and add an `index.js` file.
4. If using ES6 import syntax, add `"type": "module"` to your `package.json`.
5. Use the functions in `index.js` and run the server: `node src/index.js` to check if the server starts.
6. Add nodemon to your `package.json` for automatic server restart.

#### 4. Database Setup
1. Create a MongoDB database and connect it to your project.
2. Ensure you have MongoDB installed.
3. Remember your MongoDB password.

#### 5. Making Requests to Database
1. Create a `models` folder in `server/src` and define a `Users.js` model with a schema.
2. Connect to MongoDB using MongoDB Compass and create a new database called `recipes`.
3. Create a `routes` folder in `server/src` and add a `users.js` route file.
4. Import the `userRouter` in `index.js`.
5. Implement the registration POST request in the routes.
6. Manually add data to the database.
7. Test posting data to the database and password hashing.

#### 6. Implementing User Authentication
Create a login POST route and test it. Handle incorrect password errors and return a token and user ID on success.

#### 7. Frontend Setup
1. Start the React development server: `client> yarn start`.
2. Delete unnecessary files in the client/src folder and update `index.js`.
3. Install required packages:
*`yarn add react-router-dom axios react-cookie`.*
*`react-router-dom` for routing.*
*`axios` for fetching data.*
*`react-cookie` for working with cookies in React.*
4. Set up routing in app.js.
5. Create a `pages` folder and export pages in each file.
6. Link the pages to the routing. If you encounter errors, restart the app using `client> yarn start`.
7. Create a `components` folder and add a `navbar.js` file in `client/src`.
8. Create and write the navigation logic.
9. Add the navbar to `App.js`.
10. Create an `App.css` file.
11. Customize the components and edit the Register and Login UI.

#### 8. Making API Requests
Modify login to include a logout option for logged-in users.

#### 9. Creating API for Recipes
1. Add a `Recipes.js` model in `server/src/models` and define a `RecipeSchema`.
2. Create a `recipes.js` route in `server/src/routes` with GET and POST routes.
3. Link the new route to `index.js` in the `server/src` folder.
4. Test adding recipes to the database using tools like Insomnia.
5. Test retrieving recipes from the database.
6. Import `UserModel` from `models/Users.js` and add PUT and GET `/savedRecipes/ids` and GET `/savedRecipes` routes.
7. Add `savedRecipes` in the `UserSchema`.
8. Create a UI for displaying recipes.
9. Send data to the API and navigate to the home page.
10. Display all recipes on the home page.
11. Add functionality for saving recipes.
12. Create a page to display saved recipes.

#### 10. Implementing Token-Based Authentication
Secure your application by validating all requests using tokens.

#### 11. Display Saved Recipes for Authenticated Users Only
Ensure that saved recipes are displayed only when a user is logged in.

### Final Results
After following the steps outlined in this documentation, you will have successfully built a MERN Recipe App with user authentication. Here are some key features and the expected final results of your project:

#### Key Features
1. User Authentication: Users can register and log in securely. Incorrect login attempts are handled with appropriate error messages.
2. Database Integration: Your app is connected to a MongoDB database, allowing users to store and retrieve their recipes.
3. Token-Based Authentication: Requests to your server are secured with tokens, ensuring that only authenticated users can access certain features.
4. Recipe Management: Users can add, view, and save recipes. Recipes are stored securely in the database.
5. Navigation: The app includes navigation to different pages and a user-friendly interface.
6. Automatic Server Restart: Nodemon is configured to automatically restart the server on code changes.

### Final Results
***User Registration and Login**: Users can sign up for an account and log in. Upon successful login, they receive a token and user ID.*
***Recipe Management**: Users can create, view, and save recipes. Saved recipes are associated with the user's account.*
*Authentication and Authorization: Access to certain features is restricted to authenticated users only.*
***Route Navigation**: Your app has multiple pages for registration, login, recipe creation, and viewing saved recipes. Users can navigate seamlessly.*
***Secure API**: The API is secure, and all requests are validated using tokens for user authentication and authorization.*
***Database Integration**: Data is stored securely in a MongoDB database.*
***Responsive UI**: Your app has a user-friendly and responsive user interface.*


Blog link: https://dev.to/yungu23/mern-recipe-app-with-authentication-46fh