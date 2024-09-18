import { connectToDatabase } from '../../../lib/mongodb';
import sliders from '../../../models/home_sliders';
import { authMiddleware } from '../../../middleware/authMiddleware';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  await new Promise((resolve, reject) => {
    authMiddleware(req, res, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });

  switch (method) {
    case 'POST':
      try {
        const { title, image } = req.body;

        const slider = await sliders.create({
          title,
          image,
        });

        return res.status(200).json({ success: true, data: slider });

      } catch (error) {
        return res.status(400).json({ success: false, error: 'Error adding slider' });
      }
    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
