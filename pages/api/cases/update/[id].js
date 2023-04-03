import dbConnect from "@/libs/dbConnect";

import casesModel from "@/models/casesModel";

const handler = async (req, res) => {
    const { method, query: { id } } = req; 

    await dbConnect(); 

    if(method === "PUT") {

        try {
            const { casestatus } = req.body; 
            const courtCase = await casesModel.findByIdAndUpdate(id, {
                $set: {casestatus: casestatus}
            }, {
                new: true, 
            }); 

            res.status(200).json(courtCase);
            console.log("update successfully")
            


        } catch(err) {
            res.status(500).json({message: err}); 
            console.log(err)
        }
       

        
    }
}

export default handler; 