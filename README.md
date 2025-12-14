# Cocktails API

## Description

Cocktails API is a student project developed to practice building REST APIs and CRUD operations. The API manages information about cocktails, ingredients, and users, and includes role-based authentication and authorization.

The project includes an initial seed of cocktails with images generated using artificial intelligence.

## Technologies Used

* Node.js
* Express
* MongoDB
* dotenv
* Cloudinary
* JSON Web Token (JWT)

## Project Objective

The main goal of this project is to reinforce knowledge in:

* REST API development
* Backend architecture with Node and Express
* Data modeling with MongoDB
* Authentication and authorization implementation
* Use of external services for image storage

## Data Models

The API works with three main models:

### Cocktail

Represents a cocktail and includes information such as:

* Name
* Alcohol category
* Ingredients
* Image
* Description or other relevant fields

### Ingredient

Represents an ingredient that can be part of one or more cocktails.

### User

Represents application users. There are two roles:

* **User**: standard user
* **Admin**: user with permissions to create, update, and delete cocktails

## Authentication and Authorization

Authentication is handled using JSON Web Tokens (JWT).

* Users must authenticate to obtain a token
* The token is used to protect private routes
* Only users with the **admin** role can create, update, or delete cocktails

## Main Features

The API allows:

* Retrieving a list of all cocktails
* Retrieving cocktails filtered by alcohol category
* Creating new cocktails (admin only)
* Updating existing cocktails (admin only)
* Deleting cocktails (admin only)

## Image Management

Cocktail images are stored and managed using Cloudinary. The initial images for the project were generated with artificial intelligence and uploaded as part of the data seed.

## Environment Variables

The project uses environment variables managed with dotenv. Some required variables include:

* Server port
* MongoDB connection URI
* Cloudinary credentials
* JWT secret

## Installation and Execution

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file with the required environment variables
4. Run the development server:

   ```bash
   npm run dev
   ```

## Project Status

Completed for educational purposes and backend development practice.

## Author - Janire 

Project developed as a student practice project for learning REST API development.
