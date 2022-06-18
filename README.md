# AI-BEE
Albee assessment project.

## Discriminator
#### TL;DR
This project has been created based on AI-Bee roles. I did not add authentication because I think it's not something it's not something tricky and also mentioned as a bonus in the assessment description.  

Implemented:
- [x] Complete CRUD operations API for each entity. (Editable category and product)  
- [x] Dynamic depth, to finding a proper discount on categories. (consider 2 layers, But you’re more than welcome to show your talent :) | n-1 selects problem)
- [x] Using Nest.js.  
- [x] Using Postgresql.  
- [x] Model relations implementation using typeOrm.  
- [x] Seeder command.  
- [x] Having a swagger.  
- [x] Dockerized app. (Docker file and docker-compose)  
- [x] Complete unit tests.  
- [x] Readable documentation in readme file.  
- [x] What next? (At the end of this file)  

  
## Installation
First things first, create a file with `.env` name in root directory like `.env.example` file.  
Run the below command to install dependencies:
```
$ npm install
```

## Seeding db
To stat working with app you may need some sample data. You can run below command to seed your db with sample data.
```
$ npm run seed
```
⚠ Important: You need to clear your database completely before run this script. 
  


## Docs
To have a look at Swagger docs you need to run the application. Run:
```
$ npm start
```
and navigate to `host:port/docs/products` or `host:port/docs/categories` to see Swagger documents.
  

## Running standalone app
To run the app stand alone:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Running app on Docker
To run the app on top the Docker with related dependencies:
```bash
# Simply just
docker-compose up
```
  

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```


## What Next
- Add price to products.
- Add a shopping cart to hold each quantity of products.
- Complete user authentication.
- User profile.
- Extra discount with discount codes.
- Store the user activity.
- System monitoring.
- System logging.
- Complete integration tests.

