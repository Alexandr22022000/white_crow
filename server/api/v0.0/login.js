const {login} = require('redstar-login-server');

module.exports = (app) => {
    app.post('/api/v0.0/login', (req, res) => {
        login(req.body.email, req.body.password)
            .then((token) => {
                res.status(200).json({token});
            });
    });
};