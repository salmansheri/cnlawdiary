import dbConnect from "@/libs/dbConnect";
import casesModel from "@/models/casesModel";

const handler = async (req, res) => {
    const { method, query: { id } } = req; 
    
    await dbConnect(); 

    if(method === "GET") {
        try{
            const courtCase = await casesModel.findById({_id: id}); 
            res.status(200).json(courtCase); 

        } catch(err) {
            res.status(500).json({message:err});
            console.log(err); 

        }
       
        
    }

    if(method === "PUT") {
        try {
            const courtCase = await casesModel.findByIdAndUpdate(id, req.body, {
                new: true,
            }); 

            res.status(200).json(courtCase); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err); 


        }
    }

    if(method === "DELETE") {
        try {
            const courtCase = await casesModel.findByIdAndDelete({_id: id}); 
            res.status(200).json(courtCase); 

        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err);
        }
    }
}

export default handler; 
