# PHONE CATALOGUE

## Introduction

This is a code challenge where the user can see a collection of phones with all their main features which are displayed when the user click on them.

## Table of contents

* [Code challenge](#code-challenge)
* [Review](#review)
* [Technologies](#technologies)
* [Files structure](#files-structure)
* [Setup](#setup)


## Code challenge 

### Phone Catalogue
Your task is to write a very simple product catalogue app.

1. Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java...) that...
Has 1 endpoint /phones
Returns the attached "phones.json" payload (or a free version of it)
The data can all be mocked, no need for a persistence layer
2. Write a React app that displays the phones from the API
Use redux for state management and Axios (or similar library) for fetching data from the API
Display an initial list with all phones
When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone
Display a spinner or placeholder component while the API request is ongoing
Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
3. Push the code to a public github repo with a README.md that explains how to run API & Frontend app


### Bonus points

Dockerize the app.
Write realistic unit/end-to-end tests.

## Review

In this challengue I have have developed a REST API in Node.js as the server and a react-app in the client. 

For me, the difficult part was integrate Redux and Testing as I haven't used as much as other technologies. This challenge made improve my skills on them and also understand better how they work.

## Technologies

* node v.14.4.0
* axios v.0.19.2
* body-parser v.1.19.0
* express v.4.17.1
* websocket-extensions v.0.1.4
* enzyme v.3.11.0
* enzyme-adapter-react-16 v.1.15.2
* nodemon v.2.0.4
* redux-mock-store v.1.5.4
* bootstrap v.4.5.0
* react v.16.13.1
* react-bootstrap v.1.0.1
* react-dom v.16.13.1
* react-redux v.7.2.0
* react-router-dom v.5.2.0
* react-scripts v.3.4.1
* redux v.4.0.5
* redux-thunk v.2.3.0

## Files structure


#### Frontend

```
client/
|_ public/
|_ src/
    |_ App.js
    |_ index.js
    |_ serviceWorker.js
    |_ setupTests.js
    |_ __mocks__/
        |_ axios.js
    |_ components/
        |_ Header/ 
            |_ __snapshots__/ 
                |_ Header.test.js.snap
            |_ Header.css
            |_ Header.js    
            |_ Header.test.js

        |_ Home/ 
            |_ __snapshots__/ 
                |_ Home.test.js.snap
            |_ Home.js    
            |_ Home.test.js
        |_ Product/ 
            |_ __snapshots__/ 
                |_ Product.test.js.snap
            |_ Product.css
            |_ Product.js    
            |_ Product.test.js
        |_ ProductDetail/ 
            |_ __snapshots__/ 
                |_ ProductDetail.test.js.snap
            |_ ProductDetail.js    
            |_ ProductDetail.test.js
        |_ ProductList/ 
            |_ __snapshots__/ 
                |_ ProductList.test.js.snap
            |_ ProductList.js    
            |_ ProductList.test.js  
    |_ redux/
        |_ actions/
            |_ actions.js    
            |_ actions.test.js
        |_ constants/ 
        |   _ actions.js   
        |_ reducers/
            |_ index.js
            |_ reducers.js    
            |_ reducers.test.js    
        |_ store.js

``` 

#### Backend

```
server/
|_ images/
|_ routes/
    |_ index-routes.js
|_ app.js
|_ phones.json

``` 



## Setup

First step, install npm on /phone-catalogue:

```
npm install
```



Second step, running the server on /server:

```
cd /server
npm run server
```


Last step, running the app on /client:

```
cd /client
npm start
```

The application will run on port 3000 and the server port 4000 by default.

For running the tests:
```
cd /client
npm run test
```