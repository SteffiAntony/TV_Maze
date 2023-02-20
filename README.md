Install node modules

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### My plan if I had had more time

Without considering the environment setup and folder structuring, it has taken me two-three additional hours doing all this work. In order to achieve a user-friendly UI, it was more time-consuming to do CSS for all three views without using a CSS framework.

1. The web application could be written in TypeScript (I used Typescript at my previous employer. Since JavaScript has been used in all my recent projects, I need some more time to take a closer look in Typescript and implement accordingly.).

2. The web application should give the end user feedback concerning errors or when the connection to the API is slow. For example, when they have a slow internet connection.

3. The project should have tests.

4. The validations could have been communicated with toast messages
   (example)
   -> When the search button is clicked without a value being entered/ with a wrong value in the input field, a toast message will appear.

5. Clicking the logo [TV Maze] should redirect you to the start(home) page.

6. A page refresh of the movie list (2nd view page) should display the entire movie list, so that the user can search by entering their desired keywords in the topmost input field for a filtered movie list.

7. User could have the possibility to rate each shows/movie.

8. On search of movies in 3rd detailed view I could have come up with listing each movies detailed view (currently its navigating to 2nd movie listing page).

9. A back button could be implemented in a detailed view.

10. Instead of loading text, more spinners could have been added.

11. The responsiveness is not maintained completely, and it could be improved.
