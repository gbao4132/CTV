const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI; 

app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Đã kết nối thành công tới MongoDB!'))
  .catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err.message));

app.get('/', (req, res) => {
  res.json({ service: 'Inventory Service', status: 'Running 🚀' });
});

app.listen(PORT, () => {
  console.log(`🚀 Inventory Service đang lắng nghe tại port ${PORT}`);
});