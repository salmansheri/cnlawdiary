import dbConnect from "@/libs/dbConnect";
import casesModel from "@/models/casesModel";

const handler = async (req, res) => {
    const { method } = req; 

    await dbConnect(); 

    if(method === "GET") {
        try {
            const courtCases = await casesModel.find({}); 
            res.status(200).json(courtCases); 

        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err)

        }
    }

    if(method === "POST") {
        try {
            const courtCase = await casesModel.create(req.body); 
            res.status(201).json(courtCase); 


        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err)
        }
    }

}


export default handler;  