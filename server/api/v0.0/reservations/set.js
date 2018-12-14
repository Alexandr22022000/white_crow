const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_RESERVATION = require('../../../pSQL/reservations');

module.exports = (app) => {
    app.post('/api/v0.0/reservations/set', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        req.body.user_data |= {};

        query(QUERY_RESERVATION.SET, [
            req.body.id,
            req.body.start,
            req.body.end,
            req.body.pc_id,
            req.body.user_data,
            true,
        ]).then(() => res.status(200).json({}));
    });
};