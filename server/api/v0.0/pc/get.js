const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_PC = require('../../../pSQL/pc');

module.exports = (app) => {
    app.post('/api/v0.0/pc/get', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_PC.GET_ALL_IN_CLUB, [user.id])
            .then((dataPc) => {
                res.status(200).json({pc: dataPc.rows});
            });
    });
};