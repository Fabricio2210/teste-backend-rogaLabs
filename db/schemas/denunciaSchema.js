const mongoose = require('mongoose');

const denunciaSchema = mongoose.Schema({
    latitude:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required: true
    },
    denunciante:{
        nome:{
            type: String,
            required: true
        },
        cpf:{
            type: String,
            required: true
        }
    },
    denuncia:{
        titulo:{
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        }
    },
    endereco:{
        logradouro:{
            type: String
        },
        bairro: {
            type: String
        },
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
        pais: {
            type: String
        },
        cep:{
            type: String
        }
        
    }
    
})

module.exports = mongoose.model('denunciaSchema', denunciaSchema)