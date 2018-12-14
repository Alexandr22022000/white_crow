const {checkUser} = require('redstar-login-server'),
    {query} = require('redstar-pg'),
    FirebaseTokenGenerator = require("firebase-token-generator"),
    QUERY_PC = require('../../../pSQL/pc'),
    {TOKEN_SECRET, UID, TOKEN_DATA} = require('../../../config'),
    tokenGenerator = new FirebaseTokenGenerator(TOKEN_SECRET);

module.exports = (app) => {
    app.post('/api/v0.0/pc/connect', (req, res) => {
        const user = checkUser(req.body.token);
        if (!user) return res.status(401).json({});

        const token = tokenGenerator.createToken({
            uid: UID,
            some: TOKEN_DATA,
            data: Date.now(),
        });

        query(QUERY_PC.SET_TOKEN, [
            req.body.id,
            token,
        ]).then(() => res.status(200).json({token}));
    });
};