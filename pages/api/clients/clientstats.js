import dbConnect from "@/libs/dbConnect";
import clientsModel from "@/models/clients";

const handler = async (req, res) => {
    const {method} = req; 

    await dbConnect(); 

    if(method === "GET") {
        const date = new Date; 
        const lastyear = new Date(date.setFullYear(date.getFullYear() - 1))

        try {
            const aggregate = await clientsModel.aggregate([
                {$match: { createdAt: {$gte: lastyear } } }, 
                {
                    $project: {
                        month: { $month: "$createAt" }, 
                    }
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
            res.status(500).json({message: err}); 
            console.log(err)
        }
    }
}

export default handler; 