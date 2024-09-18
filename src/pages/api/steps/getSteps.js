import { connectToDatabase } from '../../../lib/mongodb';
import steps from '../../../models/home_steps';
import { authMiddleware } from '../../../middleware/authMiddleware';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    // await new Promise((resolve, reject) => {
    //     authMiddleware(req, res, (err) => {
    //     if (err) return reject(err);
    //     resolve();
    //     });
    // });

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