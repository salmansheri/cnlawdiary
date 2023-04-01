import mongoose from 'mongoose'; 

const clientsSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    }, 

    address: {
        type: String, 
        required: true, 
    }, 

    mobile: {
        type:Number, 
        required: true, 
    }, 

    email: {
        type:String, 
        required: true
    }

}, {
    timestamps: true
})

const clientsModel = mongoose.models.client || mongoose.model("client", clientsSchema); 

export default clientsModel; 