import { connectToDatabase } from '../../../../lib/mongodb';
import Item from '../../../../models/home_about';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'DELETE':
      try {
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
          return res.status(404).json({ success: false, message: 'Item not found' });
        }

        res.status(200).json({ success: true, data: deletedItem });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}
