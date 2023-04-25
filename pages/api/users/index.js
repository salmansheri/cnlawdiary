import dbConnect from "@/libs/dbConnect";

import userModel from "@/models/userModel";
import bcrypt from 'bcrypt'; 




const handler = async (req, res) => {
    const {method} = req; 

    await dbConnect(); 

    if(method === "GET") {
        try {
            const users = await userModel.find({}); 
            res.status(200).json(users); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
        }
    }

    if(method==="POST") {
        try {
            const {firstname, lastname, username, password, photo, email} = req.body; 

            const salt = await bcrypt.genSalt(10); 
            const hashedPassword = await bcrypt.hash(password, salt); 

            

            const user = await userModel.create({
                firstname: firstname, 
                lastname: lastname, 
                username: username, 
                password: hashedPassword, 
                photo: photo, 
                email: email
            }); 
            res.status(200).json(user); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
        }
    }

    
}

export default handler; 