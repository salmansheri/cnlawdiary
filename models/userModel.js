import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: true, 
    }, 
    lastname: {
        type: String, 
        required: true, 
    }, 
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 

    },  
    password: {
        type: String, 
        required: true

    },
    // photo: {
    //     type: String, 
    //     required: true, 

    // },
    isAdmin: {
        type: Boolean, 
        default: false,
        
    }, 
   
}, {
    timestamps: true,
}); 

const userModel = mongoose.models.user || mongoose.model("user", userSchema); 

export default userModel; 
