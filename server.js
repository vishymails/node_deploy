const express = require('express')

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from NodeJs and Docker \n");
});

app.listen(PORT, HOST);

console.log(`Rao Server Running on http://${HOST}:${PORT}`);
