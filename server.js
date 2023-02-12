const express = require("express");

const app = express()

app.get('/', (req, res) => {
  res.send("Hola gente")
})

app.listen(22)
console.log("Server on port 22")
