const mongoose = require('mongoose');
const { Schema } = mongoose;

//todo: figure out how to save sentiment
const emailSchema = new Schema({
    title: String,
    recipient: String,
    sender: String,
    body: String,
    sentiment: [
        {
            places: String,
            people: [String],
            summarization: [String],
            happiness_number: Number,
            overall_satsified: Boolean
        }
    ]
});

module.exports = mongoose.model('email', emailSchema);
