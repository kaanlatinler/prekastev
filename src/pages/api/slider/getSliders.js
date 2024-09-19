import { connectToDatabase } from '../../../lib/mongodb';
import Item from '../../../models/home_sliders';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();


  switch (method) {
    case 'GET':
      try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
