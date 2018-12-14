const reservationsGet = require('./v0.0/reservations/get'),
    reservationsSet = require('./v0.0/reservations/set'),
    reservationsAdd = require('./v0.0/reservations/add'),
    reservationsDel = require('./v0.0/reservations/del'),
    pcGet = require('./v0.0/pc/get'),
    pcSet = require('./v0.0/pc/set'),
    pcAdd = require('./v0.0/pc/add'),
    pcDel = require('./v0.0/pc/del'),
    pcConnect = require('./v0.0/pc/connect'),
    pcUpdate = require('./v0.0/pc/update'),
    pricesGet = require('./v0.0/prices/get'),
    pricesSet = require('./v0.0/prices/set'),
    pricesAdd = require('./v0.0/prices/add'),
    pricesDel = require('./v0.0/prices/del'),
    pricesSetDefault = require('./v0.0/prices/set_default'),
    login = require('./v0.0/login');

module.exports = (app) => {
    reservationsGet(app);
    reservationsSet(app);
    reservationsAdd(app);
    reservationsDel(app);

    pcGet(app);
    pcSet(app);
    pcAdd(app);
    pcDel(app);
    pcConnect(app);
    pcUpdate(app);

    pricesGet(app);
    pricesSet(app);
    pricesAdd(app);
    pricesDel(app);
    pricesSetDefault(app);

    login(app);
};