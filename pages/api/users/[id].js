import dbConnect from "@/libs/dbConnect";
import userModel from "@/models/userModel";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const user = await userModel.findById({ _id: id });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err });
      console.log(err);
    }
  }

  if (method === "PUT") {
    try {
      const user = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err });
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const user = await userModel.findByIdAndDelete({ _id: id });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  
};

export default handler; 
