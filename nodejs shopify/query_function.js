var con = require('./demo_db_connection.js');

const check_user_exist = function (referred_by) {
    return new Promise((resolve, reject) => {
        var query = `SELECT * FROM account WHERE link = '${referred_by}'`;
        console.log("Trying to run: " + query);
        con.query(query, function (err, result, fields) {
            if (err) throw err;

            result = JSON.parse(JSON.stringify(result));

            if (typeof result[0] != 'undefined') {
                console.log("Query ran: " + query);
                return resolve(result[0]);
            }

            else
                return reject();
        });
    })
}

const insert_clicked_record = function (result) {
        var query = `INSERT INTO clicked_record VALUES ('${result.username}', '${result.link}', '${new Date().toIsoString().slice(0, 19).replace('T', ' ')}')`;
        console.log("Trying to run: " + query);
        con.query(query, function (err, result, fields) {
            if (err) throw err;
            console.log("Query ran: " + query);
        });
}

const insert_completed_transaction_record = function (result, order_number){
    var query = `INSERT INTO transaction_record VALUES (${order_number}, '${result.username}', '${result.link}', '${new Date().toIsoString().slice(0, 19).replace('T', ' ')}')`;
    console.log("Trying to run: " + query);
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log("Query ran: " + query);
    });
}

const list_transaction = function (username){
    var query = `SELECT * FROM transaction_record WHERE username = '${username}'`;
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log("Query ran: " + query);
        console.log(result);
        return result;
    });
}

module.exports = {
    check_user_exist: check_user_exist,
    insert_clicked_record: insert_clicked_record,
    insert_completed_transaction_record: insert_completed_transaction_record,
    list_transaction: list_transaction
}