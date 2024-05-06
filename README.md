# Quantum-bot-application

## Overview
This project is a web application using Firebase to store and retrieve data, authenticate users, and deploy serverless functions.

## Prerequisites
- Node.js installed
- Firebase CLI installed
- 

## Setup
1. Clone the repository:
git clone <[repository-url](https://github.com/devel0ver/Quantum-bot-application.git)>

2. Install dependencies:
npm install

## Firebase Configuration
- Update the Firebase configuration in `index.js` with your project credentials.

3. Deploy your functions:
firebase deploy --only functions

## Testing API Endpoints with Postman
- Open Postman and create a new request.
- Enter the API endpoint URL you wish to test.
- To test the `addMessage` function:
  1. Set the method to `POST`.
  2. Enter the URL for the deployed function
  3. In the "Body" tab, select "raw" and choose "JSON" from the dropdown menu.
  4. Enter the JSON payload for the message, e.g., `{"text": "Hello, world!", "userId": "user123"}`.
  5. Hit "Send" and observe the response from the server.
