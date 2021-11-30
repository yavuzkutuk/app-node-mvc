const homeModel = require('../models/home');

const home = (req, res) => {
    homeModel.selectAll((err, data) => {
        if (err) console.log(err)
        res.send(data);
    })
}

module.exports = { home }