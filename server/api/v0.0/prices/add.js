const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_PRICES = require('../../../pSQL/prices');

module.exports = (app) => {
    app.post('/api/v0.0/prices/add', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_PRICES.ADD, [
            Date.now(),
            req.body.price,
            req.body.start,
            req.body.end,
            req.body.type,
            user.id,
        ]).then(() => res.status(200).json({}));
    });
};