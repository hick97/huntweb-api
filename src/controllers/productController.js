const mongoose = require('mongoose');

const Product =  mongoose.model('Product');

module.exports = {
    //Método para retornar os objetos do meu BD
    async index(req, res){
        //await - Força que a linha só seja executada depois que os dados forem capturados no BD.
        const { page = 1 } = req.query; //Utilizado para parâmetros get
        const products = await Product.paginate({}, {page, limit:10});
        //Retornando no formato json
        return res.json(products);
    },
    //Retornando detalhes de um objeto
    async show(req, res){
        const product = await Product.findById(req.params.id);

        //Retornando o produto que acabou de ser criado na base de dados
        return res.json(product);
    },
    //Criação
    async store(req, res){
        const product = await Product.create(req.body);
        //Retornando o produto que acabou de ser criado na base de dados
        return res.json(product);
    },
    async update(req, res){
        //New: true passa para variável product o valor após atualização
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },
    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);
        //Retornando mensagem de êxito
        return res.send();
    },
};