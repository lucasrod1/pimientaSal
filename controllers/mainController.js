const path = require('path');
const fs = require('fs');

const controller = {
    mostrarPeliculas: (req, res) => {
        res.render('menu', { plato: pollo})
    }
}
const menu = [
    {
        "plato": "Carpaccio fresco",
        "descripcion": "Entrada Carpaccio de salmón con cítricos U$S 65.50"
    },
    {
        "plato": "Risotto de berenjena",
        "descripcion": "Risotto de berenjena y queso de cabra U$S 47.00"
    },
    {
        "plato": "Mousse de arroz",
        "descripcion": "Mousse de arroz con leche y aroma de azahar U$S 27.50"
    },
    {
        "plato": "Espárragos blancos",
        "descripcion": "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S37.50"
    }
]

module.exports = menu