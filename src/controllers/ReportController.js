const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async Show(req, res) {
        //Encontrar todos os usuários que tem email igual ao email que termina com @rocketseat.com.br
        //Desses usuários eu quero buscar todos que moram na rua "Rua XV de Novembro"
        //Desses usuários eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@rocketseat.com.br'
                },
            },
            include: [
                { association: 'addresses', where: { street: 'Rua XV de Novembro' } },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
        });
        return res.json(users);
    }
     
}