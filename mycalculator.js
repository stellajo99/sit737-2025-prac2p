const express = require("express");
const app = express();
const res = require("express/lib/response");


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



app.get("/add", (req,res)=>{
    try{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
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

    const result = add(n1, n2);
    res.status(200).json({statuscocde:200, data: result});
    } catch(error) {
        console.log(error);
        res.status(500).json({statuscocde:500, msg:error.toString()});
    }
});

app.get("/subtract", (req,res)=>{
    try{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
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

    const result = subtract(n1, n2);
    res.status(200).json({statuscocde:200, data: result});
    } catch(error) {
        console.log(error);
        res.status(500).json({statuscocde:500, msg:error.toString()});
    }
});

app.get("/multiply", (req,res)=>{
    try{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
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

    const result = multiply(n1, n2);
    res.status(200).json({statuscocde:200, data: result});
    } catch(error) {
        console.log(error);
        res.status(500).json({statuscocde:500, msg:error.toString()});
    }
});

app.get("/divide", (req,res)=>{
    try{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }

    if(n2 === 0) {
        throw new Error("Denominator cannot be zero!");
    }

    if (n1 === NaN || n2 === NaN) {
        console.log();
        throw new Error("Parsing Error");
    }

    const result = divide(n1, n2);
    res.status(200).json({statuscocde:200, data: result});
    } catch(error) {
        console.log(error);
        res.status(500).json({statuscocde:500, msg:error.toString()});
    }
});

const port = 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})