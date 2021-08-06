# Quicklet

Quicklet is a clone of the digital learning application, Quizlet, that attempts to recreate Quizlet's popular flashcard study tools.

Check out out the live site here: [Quicklet](https://quizlet-clone-project.herokuapp.com/)

![Home](https://i.ibb.co/RvGz864/home.png)

# Technologies Used
### Back end
The back end was built using Python and a postgreSQL database. SQLAlchemy was the ORM of choice for interacting with the database and the Flask framework was used to manage the api routes.

### Front end
The front end was build entirely with React and JavaScript with Redux for managing the application's state. Styling was implemented through raw CSS and CSS modules.

### Deployment
The app has been deployed to Heroku through Docker.

# Features
Quicklet allows users to:
- Create an account
- Log in and log out
- Create, edit, and delete decks
- Create, edit, and delete flashcards
- Review flashcards by "flipping" cards to view front and back content
- Create public decks that other users can use
- Create private decks that are inaccessible by other users
- Add and remove other users' public decks into personal library
- Search for decks by title or description

# Key Components
### User Authorization
For extra security, user passwords are hashed through Werkzeug before being stored in the database. When a user logs in, the password inputted is rehashed and checked against the encrypted password.

![Sign up page](https://i.ibb.co/7CsZPBN/sign-up.png)

### Deck and Flashcard Creator
Users can create a deck with flashcards in one form. As long as there are two flashcards present, users can create as many flashcards as they need. Decks can also be set to visible, which allows all users of Quicklet to view and study the deck.

![Create deck page](https://i.ibb.co/FVVPB2p/create-deck.png)

### Deck Study Page
Users can access a deck's page where they have the option to study the deck. If the user is the creator of the deck, they can edit or delete the deck. If the user is not the creator of the deck, they can only add or remove the deck from their libraries.

![Deck page](https://i.ibb.co/hLxDw6j/deck-page.png)

### Search
Users can search for public decks to add to their libraries. On the search page, users can see the decks that match the query and also preview all of the flashcards of the decks.

![Search page](https://i.ibb.co/hgFBQBV/search.png)

# Wiki
For more details, please check out my Wiki pages:
- [API Documentation](https://github.com/john-michihara/capstone-project/wiki/API-Documentation)
- [Database Schema](https://github.com/john-michihara/capstone-project/wiki/Database-Schema)
- [MVP Features List](https://github.com/john-michihara/capstone-project/wiki/MVP-Features-List)
- [User Stories](https://github.com/john-michihara/capstone-project/wiki/User-Stories)


# To-Dos
- Create more ways to study flashcards (drag-and-drop, games, etc.)
- Use spaced repetition for quizzes to help learners retain information
- Build import feature to allow users a quicker way to create flashcards
- Set up tags for a better search experience
- Implement folders so that users can further organize their decks
