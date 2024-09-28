const express = require("express");
const connectDb = require("./configs/db");
const userRouter = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
require("dotenv").config();

const PORT = process.env.PORT || 9080;
const DB_URL = process.env.mongo_url;

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/task', taskRoute);

app.get("/", (req, res) => {
    res.send("This is home");
});

app.listen(PORT, async() => {
    console.log(`Server is runing : http://localhost:${PORT}`);
    await connectDb(DB_URL);
});