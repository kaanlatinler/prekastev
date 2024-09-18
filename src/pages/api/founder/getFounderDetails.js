import { connectToDatabase } from '../../../lib/mongodb';
import founder from '../../../models/founder';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const model = await founder.find({});

                return res.status(200).json({ success: true, data: model });

            } catch (error) {
                console.error('Error getting founder:', error);
                return res.status(400).json({ success: false, error: 'Error getting founder' });
            }
        default:
            return res.status(404).json({ success: false, error: 'Invalid method' });
    }
}