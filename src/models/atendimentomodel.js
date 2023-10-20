const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorromodel.js');

const Atendimento = conexao.define('atendimentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Essa opção garante unicidade
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    concluido: {
        type: DataTypes.BOOLEAN,
    },
    cachorroId: {
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cachorro,
            key: 'id',
        },
    },

}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.hasMany(Atendimento, { foreignKey: 'cachorroId' });
Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorroId' });

module.exports = Atendimento

