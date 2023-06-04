# MenuApp

## _MenuApp site with using Django and React/Webpack_

##
✨Idea:✨
> Create a website with a variety of food recipes
> 
> Backend with Django REST
>
> Frontend with REACT/WEBPACK 
>

## BackEnd

- Database: usage with Django admin panel (The DB has only some examples to show how site works. Should be filled up by an owner) 
- DB contains: Category, Files, Prescription
- Category contains: id, name
- Files contain: id, name, file-url
- Prescription contains: id, name, description, creation date
- Django REST API (http://127.0.0.1:8000/menu/api/)
- Swagger (http://127.0.0.1:8000/menu/swagger/)
- Redoc   (http://127.0.0.1:8000/menu/redoc/)

## FrontEnd

- using of Django REST API (http://127.0.0.1:8000/menu/api/)
- React/Webpack manually adjasted
- webpack-dev-server
- Routing

## Usage
#### _BackEnd_

- Create a new folder in VS Code/PyCharm/Atom and download the project

```sh
https://github.com/Viton4ik/MenuApp
```
- Create a virtual environment

```sh
python3 -m venv venv
```
- Activate the virtual environment

```sh
source venv/bin/activate
```
- Download libraries

```sh
pip3 install -r requirements.txt
```
- Go to the project folder

```sh
cd BackEnd Project
```
- Run Django server

```sh
python3 manage.py runserver
```
#### _FrontEnd_

- Webpack/React preparation. 

```sh
cd FrontEnd Project
```
- Initialization 

```sh
npm init -y
```
- Components installation 

```sh
npm install webpack webpack-cli
npm install @babel/core babel-loader @babel/preset-react @babel/preset-env
npm install react react-dom
npm install style-loader css-loader
npm i html-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save react-router-dom
```
- Run Webpack server

```sh
npm start
```
## Views

<img src="https://img.shields.io/static/v1?label=1&message=Run servers&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/tree/master/BackEnd/MenuApp/media/pictures/REST.png"/></h3> 

