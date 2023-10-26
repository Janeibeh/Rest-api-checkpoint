//Referencing Mongoose and validator

const mongoose= require("mongoose")
const validator= require("validator")


//Defining the Schema
const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
                    return validator.isEmail(value)
                },
        },

         password:{
               type:String,
             required: true,
           unique: true
    }

})

module.exports = mongoose.model("User",UserSchema)
        