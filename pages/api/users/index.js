import dbConnect from "@/libs/dbConnect";

import userModel from "@/models/userModel";

import CryptoJS from "crypto-js";


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
            const {firstname, lastname, username, password, photo} = req.body

            const hashedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(); 

            const user = await userModel.create({
                firstname: firstname, 
                lastname: lastname, 
                username: username, 
                password: hashedPassword, 
                photo: photo, 
            }); 
            res.status(200).json(user); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
        }
    }

    
}

export default handler; 