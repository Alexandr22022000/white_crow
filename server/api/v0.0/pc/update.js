const {query} = require('redstar-pg'),
    QUERY_PC = require('../../../pSQL/pc'),
    QUERY_RESERVATIONS = require('../../../pSQL/reservations');

module.exports = (app) => {
    app.post('/api/v0.0/pc/update', (req, res) => {
        query(QUERY_PC.GET_BY_TOKEN, [
            req.body.token,
        ]).then((pc) => {
            if (pc.rows.length === 0) return res.status(401).json({});

            query(QUERY_RESERVATIONS.GET_STATUS, [
                pc.rows[0].id,
                Date.now(),
            ]).then((reserv) => {
                if (reserv.rows.length !== 0)
                    return res.status(200).json({isUse: true, end: reserv.rows[0].end_reservation});

                query(QUERY_RESERVATIONS.GET_FOR_PC_FUTURE, [
                    pc.rows[0].id,
                    Date.now(),
                ]).then((reservF) => {
                    if (reservF.rows.length === 0)
                        return res.status(200).json({isUse: false});

                    let minStart = 9999999999999999999999;
                    for (let key in reservF.rows)
                        if (+reservF.rows[key].start_reservation < minStart) minStart = +reservF.rows[key].start_reservation;

                    res.status(200).json({isUse: false, end: minStart});
                });
            });
        });
    });
};