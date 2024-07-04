const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.static("dist"))

app.get("/api/users", (req, res) => {
    res.json({ message: "User Fetch Sucess" })
})
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))