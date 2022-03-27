# OMDB API
## How to run 
Firstly run `npm install`

and then  `npm run start`, the server should be running at `localhost:3000`

## Movies api
### API implementation
The project will be using `express` `typescript-rest` to implement the api.

### Search Movies
#### Url:
`GET localhost:3000/moives?title=${title}&type=${type}&year=${year}$page=${page}`
#### Response data format
See `/src/dto/search.dto.ts` and `/src/dto/movie.dto.ts`

## Infrastructure and deployment
 `serverless` framework will be using for AWS infrastructure and deployment. 
 This will automate the apiGateway/lambda(function/layers).

Any CI tools can be used for CI/CD e.g `travis` `circleCI`...

## Security & Authentication
### Use cognito as auth provider(or auth0), serverless config:
     authorizer:
        name: authorizer
          arn: arn:aws:cognito-idp:xxx
### Authentication service
Create an authentication service, and register it with `Server.registerAuthenticator(new PassportAuthenticator(strategy));` then the api can be secured as:
 ```  
    @Path('movies')
    @Security("ADMIN")
    class MovieController {
    } 