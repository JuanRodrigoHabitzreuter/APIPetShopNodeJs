const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clientes',
            key: 'id',
        },
    },
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cachorro