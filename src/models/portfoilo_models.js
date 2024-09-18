import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {
      type: String,
      required: true
    }
  });

const portfoiloSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
    area: {
      type: Number,  // Toplam alanı tutar
      required: true
    },
    mainPicture: {
      type: String,  // Ana resim
      required: true
    },
    groundFloor: {
      grossArea: {
        type: Number,
        required: true // Zemin kat brüt alanı
      },
      terrace: {
        type: Number,
        required: true // Zemin kat terası
      },
      pool: {
        type: Number,
        required: true // Havuz alanı
      }
    },
    firstFloor: {
      grossArea: {
        type: Number,
        required: true // 1. kat brüt alanı
      },
      terrace: {
        type: Number,
        required: true // 1. kat teras alanı
      }
    },
    roomCount: {
      type: String,  // Oda sayısı (4+1 formatında)
      required: true
    },
    filter: {
      type: String,  // Filtreleme için kullanılacak alan
      required: true
    },
    images: [imageSchema] // Evin resimlerini tutan alan
  });

export default mongoose.models.portfoilo_models || mongoose.model('portfoilo_models', portfoiloSchema);