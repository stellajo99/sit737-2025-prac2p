/*
This is a simple calculator API built using Node.js and Express. 
The API supports basic arithmetic operations such as addition, subtraction, multiplication, and division through HTTP GET requests.
*/

const express = require("express"); // Import Express.js framework
const app = express(); // Create an Express application instance
const res = require("express/lib/response");


/*
 Arithmetic operation functions
 These functions perform basic mathematical operations: addition, subtraction, multiplication, and division.
 */
const add = (n1,n2) => {
    return n1+n2;
}

const subtract = (n1,n2) => {
    return n1-n2;
}
 
const multiply = (n1,n2) => {
    return n1*n2;
}

const divide = (n1,n2) => {
    return n1/n2;
}


// Route for addition operation
app.get("/add", (req,res)=>{
    try{
    // Parse the query parameters as integers
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // Validate input (Error handling)
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log();
        throw new Error("Parsing Error");
    }

    // Perform addition
    const result = add(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        // Show error if there is any error
        console.log(error);
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

// Route for subtraction operation
app.get("/subtract", (req,res)=>{
    try{
    // Parse the query parameters as integers
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // Validate input (Error handling)
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log();
        throw new Error("Parsing Error");
    }

    // Perform subtraction
    const result = subtract(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        // Show error if there is any error
        console.log(error);
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

// Route for multiplication operation
app.get("/multiply", (req,res)=>{
    try{
    // Parse the query parameters as integers
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // Validate input (Error handling)
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log();
        throw new Error("Parsing Error");
    }

    // Perform multiplication
    const result = multiply(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        // Show error if there is any error
        console.log(error);
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

// Route for division operation
app.get("/divide", (req,res)=>{
    try{
    // Parse the query parameters as integers
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // Validate input (Error handling)
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    // Throw error if the denominator is 0
    if(n2 === 0) {
        throw new Error("Denominator cannot be zero!");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log();
        throw new Error("Parsing Error");
    }

    // Perform division
    const result = divide(n1, n2);
    res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        // Show error if there is any error
        console.log(error);
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

const port = 3000; // Define the port number for the server
app.listen(port,()=>{
console.log("App listening to: "+port) // Log the server start message
});