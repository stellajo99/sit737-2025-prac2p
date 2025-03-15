# Simple calculator web

## Overview
This is a simple calculator web page (API) built using Node.js and Express. The API supports basic arithmetic operations such as addition, subtraction, multiplication, and division through HTTP GET requests.

## Installation

1. Clone the repository or copy the project files to your local machine.
2. Navigate to the project directory and install dependencies using:
   ```sh
   npm install express
   ```
3. Start the server with:
   ```sh
   node mycalculator.js
   ```

## API Endpoints

### 1. Addition
- **Endpoint:** `/add`
- **Method:** `GET`
- **Query Parameters:**
  - `n1` (integer) - First number
  - `n2` (integer) - Second number
- **Example Request:**
  ```sh
  http://localhost:3000/add?n1=5&n2=3
  ```
- **Example Response:**
  ```json
  {
    "statuscode": 200,
    "data": 8
  }
  ```

### 2. Subtraction
- **Endpoint:** `/subtract`
- **Method:** `GET`
- **Query Parameters:**
  - `n1` (integer) - First number
  - `n2` (integer) - Second number
- **Example Request:**
  ```sh
  http://localhost:3000/subtract?n1=10&n2=4
  ```
- **Example Response:**
  ```json
  {
    "statuscode": 200,
    "data": 6
  }
  ```

### 3. Multiplication
- **Endpoint:** `/multiply`
- **Method:** `GET`
- **Query Parameters:**
  - `n1` (integer) - First number
  - `n2` (integer) - Second number
- **Example Request:**
  ```sh
  http://localhost:3000/multiply?n1=6&n2=7
  ```
- **Example Response:**
  ```json
  {
    "statuscode": 200,
    "data": 42
  }
  ```

### 4. Division
- **Endpoint:** `/divide`
- **Method:** `GET`
- **Query Parameters:**
  - `n1` (integer) - Numerator
  - `n2` (integer) - Denominator (must not be 0)
- **Example Request:**
  ```sh
  http://localhost:3000/divide?n1=20&n2=4
  ```
- **Example Response:**
  ```json
  {
    "statuscode": 200,
    "data": 5
  }
  ```

## Error Handling
The API returns a `500` status code with an error message if:
- Parameters `n1` or `n2` are missing or incorrectly defined.
- A non-numeric value is provided.
- Division by zero is attempted.

## Running the Server
- The application runs on **port 3000** by default.
- You can access the API locally at `http://localhost:3000/`.
