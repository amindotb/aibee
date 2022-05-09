# AI-BEE
Albee assessment project.

## Discriminator
### TL;DR
This project has been created based on AI-Bee assessment. Some of the project descriptions were not clear to me so I decided to send an email but I didn't get any answer until now.  
I provide my questions below here and hope to be seen and complete the rest of it.


At the test description, mentioned: " Input: product code or product name, the user's ID, and the invoice final amount. "
1. : Does the product have a price on its model, or should we send the amount (like what the above says) to compute the discount? Also, by according to the description it says, return discount (value) or -1. What should we do with this amount or price?
2. : Why should we use "user's ID"? I think a product will be selected by id, and by considering its category discount and its price, we can calculate the discount. So what is this "user's ID" mean?


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
Run
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

# e2e tests
$ npm run test:e2e

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

