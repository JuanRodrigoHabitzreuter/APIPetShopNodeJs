const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        field: 'nome',
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        field: 'telefone',
        type: DataTypes.STRING,
        unique: true, // Essa opção garante unicidade
        allowNull: false,
    },


}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente