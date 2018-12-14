module.exports = {
    GET_FOR_PC: 'SELECT id, start_reservation, end_reservation, is_conform, user_data FROM reservations WHERE pc_id = $1 AND ((start_reservation >= $2 AND start_reservation <= $3) OR (end_reservation >= $2 AND end_reservation <= $3)) OR (start_reservation <= $2 AND end_reservation >= $3)',
    ADD: 'INSERT INTO reservations(id, start_reservation, end_reservation, pc_id, club_id, user_data, is_conform) VALUES($1, $2, $3, $4, $5, $6, $7)',
    SET: 'UPDATE reservations SET start_reservation = $2, end_reservation = $3, pc_id = $4, user_data = $5, is_conform = $6 WHERE id = $1',
    DEL: 'DELETE FROM reservations WHERE id = $1',
    GET_STATUS: 'SELECT end_reservation FROM reservations WHERE pc_id = $1 AND start_reservation < $2 AND end_reservation > $2',
    GET_FOR_PC_FUTURE: 'SELECT start_reservation FROM reservations WHERE pc_id = $1 AND start_reservation > $2',
};