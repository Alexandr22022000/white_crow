const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_CLUBS = require('../../../pSQL/clubs'),
    QUERY_PRICES = require('../../../pSQL/prices');

module.exports = (app) => {
    app.post('/api/v0.0/prices/get', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_CLUBS.GET_PRICE, [user.id])
            .then((dataClub) => {
                query(QUERY_PRICES.GET, [user.id])
                    .then((data) => res.status(200).json({prices: data.rows, defaultPrice: dataClub.rows[0].price}));
            });

    });
};