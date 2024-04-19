*Read this in [Russian](README.rus.md)*

# movies-explorer-api
Diploma work on the course Web developer

*This repository contains backend.*<br>
*frontend is there [link](https://github.com/Anastasy-ya/movies-explorer-frontend)*

## Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## Functionality

- The application is a landing page that contains information about the completed project and a service where users can search for movies
and save them to their personal account.
- Adaptive layout taking into account possible overflow of blocks.
- Routes are protected by authorization.
- A request to the server occurs only after the first search (an unusual, but mandatory requirement of the task).
- The results block appears only after processing the request. If the user has not searched yet, there are no card blocks on the page. As soon as the request is made, the data is transferred to the state variable and the block appears.
- JWT token is stored in the cookie, REACT states in the localStorage.
- The slider is implemented independently for each page.
- The number of cards displayed on the page depends on the screen width of the device.
Width 1280px - 4 card rows. The "More" button loads an additional row of cards. Width 768px - 4 card rows. The "More" button loads an additional row of cards.
Width from 320px to 480px - 5 cards in 1 row. The "More" button loads 2 cards.
- The results of the already completed request do not disappear, but are again displayed to the user if they have reloaded the page or even closed the tab, but then returned to the site.
- There is instant validation of forms. If any field is not filled out or has not passed validation, the "Register" button is inactive.
- There are two backends in the project:
1. A self-written API on Node.js for user authentication and saving movies.
2. A free MoviesExplorer API - a movie search service by keywords.
- The use of third-party libraries is allowed only for form validation. In app used React Hook Form.



[Link to Figma layout](https://www.figma.com/file/mqW0Joa8w2EToBoXqKky1S/Diploma-(Copy)?type=design&node-id=344-0&mode=design)


*Pages:*

*  route "/" - About project page;
*  route "/movies" - Movies page;
*  route "/saved-movies" - Saved movies page;
*  route "/profile" - user account page;
*  routes "/signin" и "/signup" - authorization and registaration pages.


## The application is deployed on the server. Links:

Frontend https://anastasy-ya.diplom.nomoredomains.xyz

Backend https://api.anastasy-ya.diplom.nomoredomains.xyz

Pull Request https://github.com/Anastasy-ya/movies-explorer-frontend/pull/2


## To launch app (It may be necessary to change the frontend connection addresses and CORS settings for the backend)

1. Clone the project to your computer from Github using the command:
```
git clone 
```
2. Go to the project folder
```
cd .\mesto-main\
```
3. Install:
```
npm install
```
4. Launch project:
```
npm start
```

## Links to repositories:

https://github.com/Anastasy-ya/movies-explorer-api<br>
https://github.com/Anastasy-ya/movies-explorer-frontend<br>
