import mongoose from "mongoose";

let isConnected = false; // Bağlantı durumu takibi

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("MongoDB bağlantısı zaten mevcut");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB bağlantısı başarıyla kuruldu");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    throw new Error("MongoDB bağlantısı kurulamadı");
  }
};
