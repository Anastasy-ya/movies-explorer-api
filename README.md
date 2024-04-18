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
- Представляет из себя главную страницу-обложку, содержащую информацию о выполненном проекте и сервис, в котором можно найти фильмы по запросу и сохранить их в личном кабинете.
- Адаптивная верстка с учетом возможного переполнения блоков. 
- Роуты защищены авторизацией. 
- Запрос к серверу осуществляется только при первом поиске(необычный, но обязательный пункт задания).
Блок результатов появляется только после обработки запроса. Если пользователь ещё ничего не искал, блока с карточками на странице нет. Как только запрос сделан, 
данные передаются в стейт-переменную и блок появляется. 
- JWT-токен хранится в cookie, стейты в localStorage. 
- Слайдер реализован независимо для каждой страницы. 
- Если карточек больше, чем требуется для отображения 4 рядов, то под ними появляется кнопка «Ещё». 
- Количество карточек, которые отображаются на странице, зависит от ширины экрана устройства.
Ширина 1280px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек. Ширина 768px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки. 
- Результаты уже выполненного запроса не пропадают, а снова отображаются пользователю, если он перезагрузил страницу или даже закрыл вкладку, но потом вернулся на сайт.
- Осуществляется моментальная валидация форм. Если одно из полей не заполнено или не прошло валидацию, кнопка «Зарегистрироваться» неактивна.
- В проекте два бэкенда:<br>
На Node.js сделан самописный API для аутентификации пользователей и сохранения фильмов.<br>
Также использован сторонний API MoviesExplorer — сервис поиска фильмов по ключевым словам.
- Использование сторонних библиотек разрешено только для валидации формы. Использован React Hook Form.



[Ссылка на макет в Figma](https://www.figma.com/file/mqW0Joa8w2EToBoXqKky1S/Diploma-(Copy)?type=design&node-id=344-0&mode=design)


*Функционал:*

*  по роуту "/" отображается страница «О проекте»;
*  по роуту "/movies" отображается страница «Фильмы»;
*  по роуту "/saved-movies" отображается страница «Сохранённые фильмы»;
*  по роуту "/profile" отображается страница с профилем пользователя;
*  по роутам "/signin" и "/signup" отображаются страницы авторизации и регистрации.

<!---Graduate work on the course web developer/backend-->


## Ссылки на проект

Frontend https://anastasy-ya.diplom.nomoredomains.xyz

Backend https://api.anastasy-ya.diplom.nomoredomains.xyz

Pull Request https://github.com/Anastasy-ya/movies-explorer-frontend/pull/2


## Запуск проекта

1. Склонировать проект на ваш компьютер с [Github]() с помощью команды:
```
git clone 
```
2. Перейти в папку проекта
```
cd .\mesto-main\
```
3. Установить зависимости:
```
npm install
```
4. Запустить проект:
```
npm start
```

## Адрес репозитория:

https://github.com/Anastasy-ya/movies-explorer-api<br>
https://github.com/Anastasy-ya/movies-explorer-frontend<br>
<br><br>

[Критерии оценки дипломной работы](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html)
