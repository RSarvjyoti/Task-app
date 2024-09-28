const express = require("express");
const connectDb = require("./configs/db");
const userRouter = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const notificationRoute = require("./routes/notificationRoute");
const teamRoute = require("./routes/teamRoutes");
require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 9080;
const DB_URL = process.env.mongo_url;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/user', userRouter);
app.use('/api/tasks', taskRoute);
app.use('/api/notifications', notificationRoute);
app.use('/api/teams', teamRoute);
app.get("/", (req, res) => {
    res.send("This is home");
});

app.listen(PORT, async() => {
    console.log(`Server is runing : http://localhost:${PORT}`);
    await connectDb(DB_URL);
});