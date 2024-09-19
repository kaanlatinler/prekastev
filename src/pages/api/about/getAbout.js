import { connectToDatabase } from '../../../lib/mongodb';
import about from '../../../models/home_about';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET':
        try {
            const aboutData = await about.find({});
            return res.status(200).json({ success: true, data: aboutData });
        } catch (error) {
            return res.status(400).json({ success: false, error: 'Error getting about' });
        }
        default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
}