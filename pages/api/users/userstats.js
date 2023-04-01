import dbConnect from "@/libs/dbConnect";
import userModel from "@/models/userModel";

const handler = async (req, res) => {
    const {method} = req; 

    await dbConnect(); 

    if(method === "GET") {
       const date = new Date(); 
       const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

       try {
        const aggregate = await userModel.aggregate([
            { $match: { createdAt: {$gte: lastYear } } }, 
            {
                $project: {
                    month: {$month: "$createdAt"}, 
                },
            }, 
            {
                $group: {
                    _id: "$month", 
                    total: { $sum: 1 }
                }
            }
        ])

        res.status(200).json(aggregate); 

       } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
       }
    }


}

export default handler; 