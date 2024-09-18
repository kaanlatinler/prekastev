import { connectToDatabase } from '../../../../lib/mongodb';
import Item from '../../../../models/home_sliders';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'PUT':
      try {
        const { id } = req.query;
        const updateData = req.body;

        if (!id) {
          return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
          new: true,
          runValidators: true,
        });

        if (!updatedItem) {
          return res.status(404).json({ success: false, message: 'Item not found' });
        }

        res.status(200).json({ success: true, data: updatedItem });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}
