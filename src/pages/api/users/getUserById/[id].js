import { connectToDatabase } from "../../../../lib/mongodb";
import Item from "../../../../models/users";

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const { id } = req.query;

        if (!id) {
          return res
            .status(400)
            .json({ success: false, message: "ID is required" });
        }

        const model = await Item.findById(id);

        if (!model) {
          return res
            .status(404)
            .json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, data: model });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
}
