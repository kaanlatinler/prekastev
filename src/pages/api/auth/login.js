const { connectToDatabase } = require('../../../lib/mongodb');

import users from '../../../models/users';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const { method } = req;
    
    await connectToDatabase();
    
    switch (method) {
        case 'POST':
        try {
            const { email, password } = req.body;
            const user = await users.findOne({
                email,
            });

            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            let isPasswordMatch = false;

            if (password === user.password) {
                isPasswordMatch = true;
            }

            if (!isPasswordMatch) {
                return res.status(400).json({ success: false, message: 'Password is incorrect' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE,
            });

            return res.status(200).json({ success: true, token });

        } catch (error) {
            return res.status(400).json({ success: false, error: 'Error logging in' });
        }

        break;
        default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
}