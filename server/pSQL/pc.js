module.exports = {
    GET_ALL_IN_CLUB: 'SELECT id, name, type FROM pc WHERE club_id = $1',
    ADD: 'INSERT INTO pc(id, name, type, club_id) VALUES($1, $2, $3, $4)',
    SET: 'UPDATE pc SET name = $2, type = $3 WHERE id = $1',
    DEL: 'DELETE FROM pc WHERE id = $1',
    SET_TOKEN: 'UPDATE pc SET token = $2 WHERE id = $1',
    GET_BY_TOKEN: 'SELECT id FROM pc WHERE token = $1',
};