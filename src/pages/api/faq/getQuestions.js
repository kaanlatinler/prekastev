import { connectToDatabase } from '../../../lib/mongodb';
import questions from '../../../models/questions';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const allQuestions = await questions.find({});
                return res.status(200).json({ success: true, data: allQuestions });
            } catch (error) {
                console.error('Error getting questions:', error);
                return res.status(400).json({ success: false, error: 'Error getting questions' });
            }
        default:
            return res.status(404).json({ success: false, error: 'Invalid method' });
    }
}