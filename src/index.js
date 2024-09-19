const express = require("express")
const { PORT } = require("./config")

const app = express()






app.listen(PORT,() => {

    console.log(`The server has started listening on port ${PORT}`)

})