import { connectToDatabase } from '../../../lib/mongodb';
import questions from '../../../models/questions';
import { authMiddleware } from '../../../middleware/authMiddleware';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    // Eğer authMiddleware aktif olacaksa, bu kısmı açabilirsin:
    // await new Promise((resolve, reject) => {
    //     authMiddleware(req, res, (err) => {
    //     if (err) return reject(err);
    //     resolve();
    //     });
    // });

    switch (method) {
        case 'POST':
            try {
                // `req.body`'den gerekli verileri alıyoruz
                const { question, answer } = req.body;

                // Yeni model oluşturuyoruz
                const model = await questions.create({
                    question,
                    answer
                });

                return res.status(200).json({ success: true, data: model });

            } catch (error) {
                console.error('Error adding question:', error);
                return res.status(400).json({ success: false, error: 'Error adding question' });
            }
        default:
            return res.status(404).json({ success: false, error: 'Invalid method' });
    }
}