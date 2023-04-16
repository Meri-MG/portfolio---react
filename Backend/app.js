const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');

const app = express()

const port = 3001

app.use(express.json())
app.use(cors())



const MURL = "mongodb+srv://sami:1234@cluster0.p6wwavj.mongodb.net/portfolio?retryWrites=true&w=majority";
mongoose.connect(MURL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to the database");
})


db.on("disconnected", () => {
    console.log("disconnected to the database");
})


app.get("/", (req, res) => {
    res.json("Home page")
})


const AccountRouter = require("./routes/Account")
app.use("/api/Account", AccountRouter)



const DashboardRouter = require("./routes/Dashboard")
app.use("/api/Dashboard", DashboardRouter)


app.listen(port, () => console.log(`connected to port ${port} `))