import { connectToDatabase } from '../../../lib/mongodb';
import models from '../../../models/portfoilo_models';
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
                // `req.body`'den gerekli verileri alıyoruz
                const {
                    title,
                    area,
                    groundFloorGrossArea,
                    groundFloorTerrace,
                    pool,
                    firstFloorGrossArea,
                    firstFloorTerrace,
                    roomCount,
                    filter,
                    images
                } = req.body;

                // Yeni model oluşturuyoruz
                const model = await models.create({
                    title,
                    area,
                    mainPicture,
                    groundFloor: {
                        grossArea: groundFloorGrossArea,
                        terrace: groundFloorTerrace,
                        pool: pool
                    },
                    firstFloor: {
                        grossArea: firstFloorGrossArea,
                        terrace: firstFloorTerrace
                    },
                    roomCount,
                    filter,
                    images // Resimler dizi olarak bekleniyor
                });

                return res.status(200).json({ success: true, data: model });

            } catch (error) {
                console.error('Error adding model:', error);
                return res.status(400).json({ success: false, error: 'Error adding model' });
            }
        default:
            res.status(405).json({ success: false, error: 'Method not allowed' });
            break;
    }
}
