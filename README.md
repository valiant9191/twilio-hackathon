![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![React](https://aleen42.github.io/badges/src/react.svg)
![NodeJs](https://github.com/aleen42/badges/raw/master/src/node.svg)

<br />
<p align="center">
  <h1 align="center">"Keep it clean" mobile app</h1>

  <p align="center">
    <i>
    A mobile web application created using MERN stack during 48 hours hackhaton for <a href="https://www.twilio.com">Twilio</a> 
    </i>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/Gabriellji/e-commerce-app#who-are-we">Contact</a>    
</p>
  <p align="center">   <img src="https://i.imgur.com/Abgwozo.png"/></p>
</br>

## Made by 
- Gabriellji https://github.com/Gabriellji
- Fabien Lallement https://github.com/Befa222
- Yury Ivashchanka https://github.com/yuryiva
- Ioan Tranole https://github.com/IoanLT
- Kolko Valentin https://github.com/valiant9191

## Project
5 students from WCS full-stack web dev course teamed up for the second hackaton of the bootcamp. We were asked to make a webapp in 48 hours, using TWILIO tech.

## Keep It Clean
App that allows users to create, choose or join volunteering cleaning session around the world. 
Once a new event is created by a user, all the other users of the app will receive (if they agreed with it) a Whatsapp message powerd by TWILIO tech.
It's never been easier to help saving the planet!! Thanks to Keep it Clean and TWILIO.

#  About the code
The main frameworks and technologies used to build our Project are the following:

- MongoDb Cloud
- Node.js
- Express.js
- React (with *Hooks* and *Context*)
- React Router
- Styled Components

## APIs
We used the following APIs in our web application:

| [Twilio Programmable Messaging Service](https://www.twilio.com/docs/messaging/services) 

| [Mapbox API](https://docs.mapbox.com/api/overview/ "https://docs.mapbox.com/api/overview/") 

# Installation
1. Clone the repo:
    ```sh
    git clone https://github.com/Gabriellji/twilio-hackathon.git
    ```
2. Install NPM packages in frontend folder:
    ```sh
    cd frontend
    npm install
    ```
3. Install NPM packages in server folder:
   ```sh
   cd server
   npm install
   ```
4. Enter your API keys in `.env` in root of both folders
    ```sh
    /frontend/.env
    REACT_APP_MAPBOX_ACCESS_TOKEN='your mapbox api key'
    ```
    ```sh
    /server/.env
    SID='twilio account sid'
    AUTH='twilio auth key'
    NUMBER='your number'
    TWILIO_NUMBER='twilio number'
    NODE_ENV=development
    PORT='your port'
    AUTH_MODE=false
    JWT_SECRET_KEY='your-key'
    MONGO_CONNECTION_STRING='your connection string'
    ```

5. Run the app in the development mode with `npm start` in fronted folder 

6. Run the app in the development mode with `npm start` in server folder

7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



