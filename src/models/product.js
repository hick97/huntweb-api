const mongoose = require('mongoose');
//Utilizando o conceito de paginação
const mongoosePaginate = require('mongoose-paginate');

// Esquema do db
const ProductSchema =  new mongoose.Schema({
    title:{
        type: String,
        //Diz que é obrigatório
        required: true,
    },
    description:{
        type: String, 
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date, 
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);