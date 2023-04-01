import dbConnect from "@/libs/dbConnect";
import clientsModel from "@/models/clients";

const handler = async (req, res) => {
    const {method} = req; 

    await dbConnect(); 

    if(method === "GET") {
        try {
            const clients = await clientsModel.find({});
            
            res.status(200).json(clients); 



        } catch(err) {
            res.status(500).json({message: err})
        }
        const clients = await clientsModel.find({}); 

    }

    if(method === "POST") {
        try {
            
            const client = await clientsModel.create(req.body)

            res.status(201).json(client)

        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err)
        }

    }
}

export default handler; 