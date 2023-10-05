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

Cliente.hasMany(Cachorro, { foreignKey: 'pessoa_id' });
Cachorro.belongsTo(Cliente, { foreignKey: 'pessoa_id' });


module.exports = Cliente