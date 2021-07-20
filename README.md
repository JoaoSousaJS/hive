This task was done using Docker.

First of all you need to add the value below to your hosts

127.0.0.1 host.docker.internal

after adding the host, you can go to server folder and run:
- npm install or yarn install

- docker-compose up  

After that, you can go to client folder and run:
- npm install or yarn install

yarn dev

if you have NPM:
- npm run dev

The back end of the project was created using Nodejs, Express and mongoose. The database is mongodb

There are some improvements in the back-end such as:
- When the user clicks on "Start Game", we can create a new game in the db with status open.
- Update the game every time a user select a space and check for wins in the back end to improve security.
- Generate a code, so users can come back later and finish the game, even in another PC.
- Add error handling  
- Save the moves in the db.

Front-end:
- Add a leaderboard showing the last 10 games.
- Add a win counter, for example: X has won 5 and O has won 4.
- Generate a link and invite a person to play against in another pc.
