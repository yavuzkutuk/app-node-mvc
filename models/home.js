const { db } = require('../config/db.config');

const selectAll = (data) => {
    db.query('SELECT * FROM home', (error, result) => {
        if (error) console.log(error)
        data(null, result);
    }); 
}


module.exports = { selectAll };