import dbConnect from "@/libs/dbConnect";
import userModel from "@/models/userModel";
import bcrypt from 'bcrypt'; 
import jwt from "jsonwebtoken";
import cookie from 'cookie'; 


const handler = async (req, res) => {
  const { method } = req;

  await dbConnect(); 


  if (method === "POST") {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email: email });

      const decryptPassword = await bcrypt.compare(password, user.password); 

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

     if(!user) {
      return res.status(404).json({message: "not found"})
     }

     if(decryptPassword) {
      res.setHeader("Set-Cookie", cookie.serialize("token", accessToken), {
        maxAge: 60,
        sameSite: "strict",
        path: "/",
      })

      res.status(200).json(user); 
     } else {
      res.status(401).json("Unauthorized")
     }
    } catch (err) {
      res.status(500).json({ message: err });
      console.log(err);
    }
  }
};

export default handler;
