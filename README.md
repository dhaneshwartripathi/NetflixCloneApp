# NetflixCloneApp

This is a full-functioning Netflix-like clone app built using React, MongoDB, Firebase, Context API, Material-UI, JWT, and Axios. The app includes both an admin client and an API.

## Features

- User Authentication: Users can sign up, sign in, and sign out using Firebase authentication. JWT tokens are used for secure authentication and authorization.
- Content Management: The admin client allows the admin to manage the content of the app, including adding, updating, and deleting movies or TV shows.
- Movie/TV Show Listing: The app displays a list of movies and TV shows fetched from MongoDB using Axios. Users can browse through the content, view details, and add/remove items to/from their watchlist.
- Watchlist: Authenticated users can add movies/TV shows to their watchlist, which is stored in MongoDB. Users can view their watchlist and remove items from it.
- Responsive UI: Material-UI is used for building responsive and visually appealing user interfaces.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- MongoDB: A NoSQL database used for storing movie/TV show content and user watchlists.
- Firebase: A mobile and web application development platform used for user authentication.
- Context API: A state management library in React used for managing global application state.
- Material-UI: A popular UI framework for React used for building responsive and visually appealing user interfaces.
- JWT: JSON Web Tokens used for secure authentication and authorization.
- Axios: A popular library for making HTTP requests from the client side.

## Installation

To run the app locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Install the dependencies using `npm install` or `yarn install`.
4. Set up a MongoDB database and Firebase authentication in your project.
5. Create a `.env` file in the root of the project and add the following environment variables:
   - `MONGODB_URI`: MongoDB connection string.
   - `FIREBASE_API_KEY`: Firebase API key.
   - `FIREBASE_AUTH_DOMAIN`: Firebase authentication domain.
   - `FIREBASE_PROJECT_ID`: Firebase project ID.
   - `FIREBASE_STORAGE_BUCKET`: Firebase storage bucket.
   - `FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID.
   - `FIREBASE_APP_ID`: Firebase app ID.
6. Run the app using `npm start` or `yarn start`.

## Contributions

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, please feel free to contact me at [email address].
