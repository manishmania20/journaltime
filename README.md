# JournalTime #
## NodeJS RESTful API using Express ##
A handy journal editor to create and delete journals on the go and add multiple routes on your own to accommodate other features. 
URL : <https://journaltime.herokuapp.com>

## Installation ##
* Clone the repository to local machine using __git clone__
* Run __npm install__ on the cloned directory
* Create additional routes to suit your needs
* Connect your own database to the API 

## About and running of API ##
* The API is based on the MVC(Model View Controller) paradigm, handling the requests and responses between browser and server.
### Controller ###
* The Controller tells about how to render the view using the Schema Constructor 'Journal' 
   const journal_home = ((req, res) => { 
   res.body()}
  1. The function journal_home handles the requests and responses and consists of two parameters req and res and inside the body is how to render the view.

  2. .then((result) => {
           res.render('journals/home', {title: 'My journals', journals: result})
       })
       .catch((error) => {
           console.log(error)
__result__ object displays journals and the route is directed to 'journals/home' and error if any, is console logged in the terminal by using the __then-catch__ method.

  3. __findById__ and __findByIdAndDelete__ 
functions use the id to find a single document from the list of other documents.

### Routes ###
 The routes present in the __routes/basicRoutes.js__ follows the basic function

app.METHOD(PATH, HANDLER)

* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

### Model ###
* Model is responsible for the database part comprising data logic and manipulation. 
* Mongoose, an ODM(Object Data Modelling) library for MongoDb and NodeJs does our work for building the schema.
* We use the schema constructor __Schema__ to define the schema comprising of __title__, __date__ and, __body__. You may add more things to the schema if you want and mention their type and required(not necessary).

### View ###
* The view is responsible for the user layout i.e. what the user actually sees
* EJS has been used for the display of pages.
* Use __<%- tag %> to specify EJS which uses referencing to commonly used pages to make code more understandable and save time for the developer like header and footer will be common for all the main routes.
* The partials folder contains all the commonly used pages like header, navbar and footer. 
* You may add your contact, error and any other page in the views folder.

## App.js ##
* The app.js file is the one which executes first and uses the npm packages like mongoose, morgan, etc.
* Express is used to create the app.
* For defining the port one can use any port of his choice(3000,8080,etc) and __process.env.PORT__ is used for deploying to Heroku.
* Every MongoDb Atlas cloud database has its own dbURI as an access token
* Morgan is used for logging the browser connection details like process type, latency, etc.
* 404 error page is used for displaying wrong route error. 

## Running the software ##
* To run the API in local machine use __nodemon app__
* To run it on Heroku live server or gh pages use __node app.js__

## Software and packages used ##
* NodeJs
* MongoDb Atlas
* Express
* Ejs
* Mongoose
