const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_PC = require('../../../pSQL/pc'),
    QUERY_RESERVATION = require('../../../pSQL/reservations');

module.exports = (app) => {
    app.post('/api/v0.0/reservations/get', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_PC.GET_ALL_IN_CLUB, [user.id])
            .then((dataPc) => {
                const pc = dataPc.rows;
                let i = 0;

                if (pc.length === 0) return res.status(200).json({pc: []});

                for (let key in pc) {
                    query(QUERY_RESERVATION.GET_FOR_PC, [pc[key].id, req.body.start, req.body.end])
                        .then((dataRes) => {
                            pc[key].reservations = dataRes.rows;

                            i++;
                            if (i >= pc.length) {
                                res.status(200).json({pc});
                            }
                        });
                }
            });
    });
};