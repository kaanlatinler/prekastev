import { connectToDatabase } from '../../../lib/mongodb';
import users from '../../../models/users';
import { authMiddleware } from '../../../middleware/authMiddleware';

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
        case 'POST':
            try {
                const { name, email, password } = req.body;
                const user = await users.create({ name, email, password });
                res.status(200).json({ success: true, data: user });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Server Error' });
            }
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid method' });
            break;
    }
}