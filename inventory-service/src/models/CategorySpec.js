const mongoose = require('mongoose');

const categorySpecSchema = new mongoose.Schema({
    category: { type: String, required: true, unique: true },
    specsConfig: [
        {
            key: String,
            label: String,
            options: [String]
        }
    ]
});

module.exports = mongoose.model('CategorySpec', categorySpecSchema);