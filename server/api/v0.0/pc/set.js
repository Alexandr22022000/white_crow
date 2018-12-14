const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    QUERY_PC = require('../../../pSQL/pc');

module.exports = (app) => {
    app.post('/api/v0.0/pc/set', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        query(QUERY_PC.SET, [
            req.body.id,
            req.body.name,
            req.body.type,
        ]).then(() => res.status(200).json({}));
    });
};