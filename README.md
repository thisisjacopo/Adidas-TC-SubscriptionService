## Title:

### Jacopo Rodighiero - Adidas Challenge Subscription Service  Api

-----------------------------------------

## Technologies Used:

#### Nodejs version: 14.16.0

#### Framework: Nestjs

#### Database: MongoDB

#### Libraries: Mongoose

#### Documentation: @nestjs/Swagger

--------------------------------------------------------------------------------------------

## Api Overview:

The data is saved on a MongoDb cluster and connects via mongoose, all the access details can be found in the `.env` , `.env.example` and `app.secrets.ts` files, for challenge purpose I decided to leave the 3 files to improve accessibility and readability of code.

Validations are implemented in the DTOs files and in the `subscription-consent-validation.pipe.ts` file.


## Installations:

You would need NVM and Nodejs installed in your machine.

## To run the app:

`$ npm run start:dev || $ npm run start`

----------------------------------------------------------------------------------------------------

## Docker Instructions:

To build docker image: `$ docker build -t yourusername/yourtitle`

To run your image : `$ docker run -p 5000:5001  yourImageId `

To compose docker: `$ docker-compose up` and once finished `$ docker-compose down`

---------------------------------------------------------

## Documentation:

The swagger documentation and endpoints can be found at app running `http:localhost:5000/api` 



