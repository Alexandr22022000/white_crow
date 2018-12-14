const {query} = require('redstar-pg'),
    QUERY = require('../pSQL/clubs');

module.exports = (login, password) => {
    return new Promise((resolve, reject) => {
        query(QUERY.LOGIN, [login, password])
            .then((data) => {
                if (data.rows.length === 0) return resolve({isUser: false});

                resolve({isUser: true, data: {id: data.rows[0].id}});
            });
    });
};