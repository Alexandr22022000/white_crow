module.exports = {
    GET: 'SELECT id, price, start_p, end_p, type FROM prices WHERE club_id = $1',
    ADD: 'INSERT INTO prices(id, price, start_p, end_p, type, club_id) VALUES($1, $2, $3, $4, $5, $6)',
    SET: 'UPDATE prices SET price = $2, start_p = $3, end_p = $4 WHERE id = $1',
    DEL: 'DELETE FROM prices WHERE id = $1',
};