import { connectToDatabase } from "../../../../lib/mongodb";
import Item from "../../../../models/portfoilo_models";
import { authMiddleware } from "../../../../middleware/authMiddleware";

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  // await new Promise((resolve, reject) => {
  //   authMiddleware(req, res, (err) => {
  //     if (err) return reject(err);
  //     resolve();
  //   });
  // });

  switch (method) {
    case "DELETE":
      try {
        const modelId = req.query.id[0];
        const imageId = req.query.id[1];

        if (!modelId || !imageId) {
          return res
            .status(400)
            .json({ success: false, message: "ID and imageId are required" });
        }

        const updatedItem = await Item.findByIdAndUpdate(
          modelId,
          { $pull: { images: { id: imageId } } }, // Belirtilen imageId'ye sahip resmi sil
          { new: true }
        );

        if (!updatedItem) {
          return res
            .status(404)
            .json({ success: false, message: "Portfolio item not found" });
        }

        res.status(200).json({ success: true, data: updatedItem });
      } catch (error) {
        console.error(error); // Hata günlüğü
        res.status(500).json({ success: false, message: "Server Error" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
}
