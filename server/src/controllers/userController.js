const User = require("../models/userModel");
const { generateToken } = require("../utils/genrateToken");
const { hashPassword, comparePassword } = require("../utils/hashigData");

let signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "Registered successfully!" });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
};

let login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const isMatch = await comparePassword(password, user.password);

    if (isMatch) {
        const token = generateToken({ userId: user._id, email: user.email });
        res.json({ message: "Login Successful", token });

    } else {
      res.status(400).send("Invalid email or password");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
  }
};

module.exports = { signup, login };
