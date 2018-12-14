module.exports = {
    LOGIN: "SELECT id FROM clubs WHERE email = $1 AND password = $2",
    GET_PRICE: 'SELECT price FROM clubs WHERE id = $1',
    SET_PRICE: 'UPDATE clubs SET price = $2 WHERE id = $1',
};