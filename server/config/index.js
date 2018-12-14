let config;

try {
    config = require('../../config');
}
catch (e) {
    config = require('../../config_demo');
}

module.exports = config;