<h1 align="center"> HeroesApp </h1>

<p align="center">
<img src="https://img.shields.io/badge/license-MIT-green">
<img src="https://img.shields.io/badge/npm-v8.19.2-red">
<img src="https://img.shields.io/badge/node-v18.12.1-yellowgreen">
</p>

![list-hero](https://i.imgur.com/kh0KdFy.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

In this project I tested my knowledge in: lazy loading, guards, service consumption, custom pipes. simple form (no reactives) and using certain angular material components.

The application has a weak authentication system since the main objective would be to demonstrate a basic command of Angular in the aforementioned aspects.

In order to simulate the backend and make requests such as GET, POST, etc., the [json-server](https://github.com/typicode/json-server) tool was used, the json file that will contain all the heroes is provided.


## Development server

Create a new folder outside the project root where you can add the [db.json](https://gist.github.com/Ronnal-Zp/ed62860fd774fe521d14ee8ef736cb8e) file that will be used to generate the queries.

Start JSON Server

```
json-server --watch db.json
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/auth/login`. The application will automatically reload if you change any of the source files.

## Build

Build to prod is not recommended, use backend local with `json-server`


## Usage

Navigate to `http://localhost:4200/heroes/add` to create a new hero.
![add-hero](https://i.imgur.com/PBW1bGd.png)

Navigate to `http://localhost:4200/heroes/edit/dc-batman` to edit a hero.
![edit-hero](https://i.imgur.com/SfAx2cb.png)


Navigate to `http://localhost:4200/heroes/search` to search a hero.
![search](https://i.imgur.com/PLsgcpo.png)

## Used tools
* ⚙   [json-server](https://github.com/typicode/json-server)
* 🧾  [bootstrap](https://getbootstrap.com/)
* 🧩  [angular material](https://material.angular.io/)



## License
***
MIT


