import dbConnect from "@/libs/dbConnect";
import clientsModel from "@/models/clients";

const handler = async (req, res) => {
    const {method, query: {id}} = req; 

    await dbConnect(); 

    if(method === "GET") {
        try {
            const client = await clientsModel.findById({_id: id})

        } catch {
            res.status(500).json({message : err})
            console.log(err)
        }
    }

    if(method === "PUT") {
        try {
            const client = await clientsModel.findByIdAndUpdate(id, req.body, {
                new:true, 
            }); 

            res.status(200).json(client)
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

    if(method === "DELETE") {
       try {

        const client = await clientsModel.findByIdAndDelete({_id: id}); 
        res.status(200).json(client); 
        console.log(`Client with id: ${id} has been deleted successfully`)

        res.status(200).json("Deleted  successfully")
        console.log(` Deleted Sucess`)

       } catch(err) {
        res.status(500).json({message: err})
       }
    }
}

export default handler; 