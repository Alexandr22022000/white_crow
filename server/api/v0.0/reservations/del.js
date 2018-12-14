const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_RESERVATION = require('../../../pSQL/reservations');

module.exports = (app) => {
    app.post('/api/v0.0/reservations/del', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_RESERVATION.DEL, [req.body.id])
            .then(() => res.status(200).json({}));
    });
};