# Furniture Microservices App

This is a sample microservices-based application for a furniture store. The application consists of the following services:

- **Client**: Front-end application built using Angular, running on `localhost/client`
- **Product Service**: Microservice for managing products, running on `localhost/product-service`
- **Comment Service**: Microservice for managing comments on products, running on `localhost/comment-service`
- **Filter Service**: Microservice for filtering products based on user preferences, running on `localhost/filter-service`

## Installation and Setup

1. Clone the repository: `git clone https://github.com/Creative-developers/furniture-microservice-app.git`
2. Install dependencies for each service by navigating to the service directory and running `npm install`.
3. Start each service by navigating to the service directory and running `npm start`.
4. For Running Skaffold run `skaffold dev` to build, push all the microservices and client app to the local kubernets cluster

