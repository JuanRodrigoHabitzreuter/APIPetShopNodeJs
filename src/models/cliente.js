const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorro');

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        unique: true, // Essa opção garante unicidade
    },
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'clienteId' });
Cliente.hasMany(Cachorro, { foreignKey: 'clienteId' });

module.exports = Cliente