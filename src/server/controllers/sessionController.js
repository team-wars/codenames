const db = require('../db/index');

const genRoomID = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = '';
    for (var i = 4; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

module.exports = {
    create(req, res) {
        db.query('SELECT room FROM session ORDER BY room DESC LIMIT 1')
            .then(data => {
                 
                console.log('new session data ', data);
                console.log('type of data ', typeof data);
                console.log('data.rows ', data.rows)
                // let roomID;
                // let isUnique = false;
                // while (!isUnique) {
                //     roomID = genRoomID();
                //     isUnique = data.rows.includes(roomID);
                // }
                let roomID;
                if (!data.rows.length) roomID = 1;
                else roomID = Number(data.rows[0].room) + 1;
                console.log('roomID ', roomID)
                db.query('INSERT INTO session(status, room) VALUES($1, $2)', ['idle', roomID])
                    .then(result => console.log('result: ', result))
                    .catch(err => console.log('error inserting session: ', err));

            })
            .catch(err => console.log('Error selecting from session: ', err));

    }
}