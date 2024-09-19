const express = require("express")
const { PORT } = require("./config/server.config")
const apiRouter = require("./routes")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use("/api",apiRouter)


app.listen(PORT,() => {

    console.log(`The server has started listening on port ${PORT}`)

})