const express = require('express');

const PORT = 4141;
const HOST = '127.0.0.1';


const app = express();

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.listen(PORT, HOST);
console.log(`Runnig on http://${HOST}:${PORT}`);