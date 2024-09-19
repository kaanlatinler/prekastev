import { connectToDatabase } from "../../../lib/mongodb";
import { authMiddleware } from "../../../middleware/authMiddleware";
import users from "../../../models/users";

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  // Eğer authMiddleware aktif olacaksa, bu kısmı açabilirsin:
  await new Promise((resolve, reject) => {
    authMiddleware(req, res, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });

  switch (method) {
    case "GET":
      try {
        const usersFromDb = await users.find({});
        res.status(200).json({ success: true, data: usersFromDb });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
}
