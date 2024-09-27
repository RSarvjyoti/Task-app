const {Router} = require("express");
const { signup, login } = require("../controllers/userController");

const userRouter = Router();

userRouter.post('/register', signup);
userRouter.post('/login', login);

module.exports = userRouter;