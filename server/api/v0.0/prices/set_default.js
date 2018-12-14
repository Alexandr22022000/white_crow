const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_CLUBS = require('../../../pSQL/clubs');

module.exports = (app) => {
    app.post('/api/v0.0/prices/set_default', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_CLUBS.SET_PRICE, [user.id, req.body.price])
            .then(() => res.status(200).json({}));
    });
};