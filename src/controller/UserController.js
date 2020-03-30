// const database = require('../database')
const User = require('../models/User')

module.exports = {
    async create(req,res){
        const { name, email } = req.body
        console.log(req.body)
        const user = await User.create({ name, email })

        return res.json(user)
    },
    async index(req,res){
        const data = await User.findAll();
        return res.json(data);
    }
}
