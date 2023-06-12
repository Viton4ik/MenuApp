# MenuApp

## _MenuApp site with using Django and React/Webpack_

##
✨Idea:✨
> Create a website with a variety of food recipes (Prescriptions with Category)
> 
> Backend with Django REST API
>
> Frontend with REACT/WEBPACK 
>
> SWAGGER doc
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

- Using of Django REST API (http://127.0.0.1:8000/menu/api/)
- React/Webpack manually adjusted
- Webpack-dev-server
- Routing

## Usage
#### _BackEnd_

- Create a new folder in VS Code/PyCharm/Atom and download the project

```sh
git clone https://github.com/Viton4ik/MenuApp.git
```
```sh
cd MenuApp
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
cd BackEnd/MenuApp
pip3 install -r requirements.txt
```
- Run Django server

```sh
python3 manage.py runserver
```
#### _FrontEnd_

- Webpack/React preparation. 
- Open a new terminal

```sh
cd FrontEnd
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
- Run Webpack

```sh
npm start
```
## Views

<img src="https://img.shields.io/static/v1?label=1&message=REST API&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/REST.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=2&message=SWAGGER&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/SWAGGER.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=3&message=REDOC&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/REDOC.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=4&message=MainPage&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/MainPage.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=5&message=Categories&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/Category.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=6&message=All Prescriptions&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/PrescriptionsAll.png"/></h3> 

<img src="https://img.shields.io/static/v1?label=7&message=Prescription&color=9cf"/>
<h3 align="center"><img src="https://github.com/Viton4ik/MenuApp/blob/master/BackEnd/MenuApp/media/pictures/Prescription.png"/></h3> 

