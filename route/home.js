const controller = require('../controllers/homeController');

module.exports = (app) => {
    app.get('/', controller.home);
}