# Information API

This project is a Information API built with Node.js and Express. It uses Swagger for API documentation and provides an endpoint for get information.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Framework for Node.js that facilitates web application development.
- **Morgan**: Middleware for logging HTTP requests.
- **CORS**: Middleware for allowing requests from different domains.
- **Swagger**: Tool for documenting and testing APIs.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone <repository URL>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The API will be available at `http://localhost:4005`.

3. The API documentation can be accessed at `http://localhost:4005/api-docs`.

## Project Structure

- `index.js`: Main file where the Express server is configured.
- `src/Information/apidates.js`: File that defines the routes and logic for the API Information.
- `src/swagger/swagger.js`: Configuration for Swagger to generate the API documentation.

## Routes

- `GET /apidates`: Endpoint get information (see `src/Information/index.js` for details).

## Docker

To run this project in a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t get-information .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 4005:4005 get-information
    ```

3. The API will be available at `http://localhost:4005` inside the Docker container.

## Documentation with Swagger

API documentation is generated with Swagger and served at the `/api-docs` endpoint. Swagger allows you to view and test the API endpoints interactively.
