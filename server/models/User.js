const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    _id: mongoose.Types.ObjectId,
    createdDate: { type: Date, default: Date.now },
    clients: [{ type: Schema.Types.ObjectId, ref: 'client' }]
});

module.exports = mongoose.model('users', userSchema);
