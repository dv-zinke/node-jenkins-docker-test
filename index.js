const express = require('express');

const PORT = 4141;
const HOST = '0.0.0.0';


const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(PORT, HOST);
console.log(`Runnig on http://${HOST}:${PORT}`);