const User = require("../models/userModel")

let signup = async (req, res) => {
   try{
    const user = new User(req.body);
    await user.save();
   }catch(err) {
    console.log(err);
   }

   res.send("Registered!");

}


let login = async (req, res) => {
    const {email, password} = req.body; 
    try{
        const user = await User.find({email, password});
        if(user.length > 0 ) {
            res.send("Login Successful");
        }else {
            res.send("Login Failed")
        }
    }catch(err) {

    }
}

module.exports = {signup, login};