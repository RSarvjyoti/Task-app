const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
})

const User = model('users', userSchema);

module.exports = User;