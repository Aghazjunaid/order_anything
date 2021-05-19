const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true, },
    email: {type: String, unique: true},
    role: {
        type: String,
        enum: ["Customer", "Admin", "Delivery Person"],
        default: "Customer" 
    },
    status: {
        type: String,
        enum: ["Items Picked", "Enroute", "Delivered", "Cancelled"]
    },
    phone: {type: Number, required: true, unique: true },
    password: {type: String, required: true },
},{ timestamps:true })


User = mongoose.model("user", UserSchema);  
// user will be fields in our database

module.exports={ 
    User
}