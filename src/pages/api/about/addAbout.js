import { connectToDatabase } from '../../../lib/mongodb';
import about from '../../../models/home_about';
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
        case 'POST':
        try {
            const { message, image } = req.body;
    
            const aboutData = await about.create({
            message,
            image,
            });
    
            return res.status(200).json({ success: true, data: aboutData });
    
        } catch (error) {
            return res.status(400).json({ success: false, error: 'Error adding about' });
        }
        default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
}