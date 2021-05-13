const mongoose = require('mongoose');

const erroLogSchema = mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('erroLogSchema', erroLogSchema)