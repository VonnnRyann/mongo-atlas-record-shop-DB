## things that are going to be done

This file lists the changes that need to be made in each stage. It is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each task added.

## Task 01 - Mock database and Controllers

Most applications made for the web have to do with some sort of data manipulation. In order to be able to manipulate our data we have to do two things first:

- We need to define the endpoints of our app that our users will use to send
  different kinds of requests (GET, POST, DELETE, etc).
- We have to define how do we want our data to look like and of course store them somewhere.

Story: Our client is a record shop owner who wants to have a list of products in the main page of their shop. They know that they want to display the title, the artist, the year, the cover image and the price for each record they have available. However, the client still doesn't have a full list of all their products. He would also like to be able to add new records to his collection.

TODO:

    Setup a simple express server. In this task-01 you don't need to add middleware and error-handler (You can use ES6 or CommonJS).

    Please create two endpoints(routes) for the shop owner
        api/records -> a GET that will return all records of the store
        api/records -> a POST that will add a new record to the record collection

    For now you can just return a string from the above endpoints, just to make sure everything works.

    Using lowdb set up a mock database for our records. It can be empty or it can contain already some fake data. Update the routes above so that they work just like they should.
        api/records -> should return all the records that are in our lowdb database
        api/records -> should add a new record to our lowdb database


## TASK 04 - MONGOOSE
In this task we will introduce Mongoose. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. We will learn how to setup Mongoose and how to connect it with our app. We will create our user models and schemas and define exactly how a record/user/order object will look.
TODO:
Please set up mongoose in your server.
Create a data schema and a model for our records, users and orders.
## TASK 05 - MONGOOSE AND CONTROLLERS
In this task will update our controllers to start communicating with our database.

TODO:
Please update your record’s controller using Mongoose.
Make sure all API endpoints for records work as they should.
Repeat the process for your users and orders controllers.