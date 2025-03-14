const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.use((req, res, next) => {
//     const now = Date.now()
//     req.requestTime = now
//     next()
//    })
//    app.get("/", (req, res) => {
//     res.send(req.requestTime.toString())
//    })
const arithmeticMiddleware = (req, res, next) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers! Please provide num1 and num2 as query parameters.");
    }

    req.calculatedValue = num1 * num2;  
    next(); 
};

app.get("/", arithmeticMiddleware, (req, res) => {
    const result = req.calculatedValue;
    res.send(`The calculated value is: ${result}`);
    console.log(`Response sent to user: The calculated value is ${result}`);
});
//to use this fucntion, you have to input your values in the url like this:
//    http://localhost:3000/?num1=2&num2=3     this will calculate num1*num2 in this case it will be 6

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});