# Star Wars Weight

This is a demonstration of a NodeJS based AWS lambda micro service and a GraphQL architecture consumed by a React application. Tested by Cypress. Credits to SWAPI: https://swapi.dev/

## How to run this project to try it out?

### Prerequisites

- node 14
- yarn or npm

### Steps

- `cd backend`
- `cd lambdas/api`
- `yarn`
- `yarn run start:dev`

- `cd client`
- `yarn`
- `cd packages/frontend`
- `yarn start`

- open `http://localhost:3000` in your browser
- type in Skywalker and hit search

## How to run tests on this project?

### Prerequisites

- node 14
- npm or yarn
- cypress

### Steps

- `cd client/packages/e2e`
- `yarn run cypress:open`

- pick a test and run it

## How to run the AWS lambda service and connect the web app to it?

### Prerequisites

- aws-cli
- awd credentials set up
- node 14
- npm or yarn

### Steps

Once your AWS credentials have been set up: https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html

- `cd backend/lambdas/api`
- `sls deploy`

Wait until the deployment is finished and it returned the `endpoints: -POST` section and copy this URI
e.g `endpoints: POST - https://hotbxxxx.execute-api.us-east-1.amazonaws.com/dev/graphql`

- `cd client/packages/frontend`
- change the value of the `GRAPH_URI` in the `.env` file from `http://localhost:3001/graphql` to the URI given by a succesful `sls deploy`
