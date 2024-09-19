import { connectToDatabase } from '../../../lib/mongodb';
import steps from '../../../models/home_steps';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET':
        try {
            const stepsData = await steps.find({});
            return res.status(200).json({ success: true, data: stepsData });
        } catch (error) {
            return res.status(400).json({ success: false, error: 'Error getting steps' });
        }
        default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
}