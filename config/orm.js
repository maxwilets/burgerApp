var connection = require('../config/connection')

printQuestionMark = (num) => {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push('?')
    }
    return arr.toString()
}

objToSql = (ob) => {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

orm = {
    selectAll: (table, cb) => {
        var query = "SELECT * FROM " + table;
        connection.query(query, (err, res) => {
            if (err) {
                throw err
            };
            cb(res)

        })

    },
    insertOne: (table,cols,value, cb) => {
       //  var query = 'INSERT INTO ' + table + "("+ cols.toString();
      //   query += ')' + "VALUES (" + printQuestionMark(val.length) + ');'
        var query = "INSERT INTO "+table +"("+ cols +")"+ "VALUES("
        query += value + ");"

        connection.query(query, console.log('query!!!! '+ query), (err, res) => {
            if (err) {
                throw err
            }
            cb(res)
        })
    },
    updateOne: (table, condition, cb) => {
        var query = "UPDATE " + table + " SET DEVOURED = true"
        query += " WHERE id=" + condition + ';'
       // var query = "UPDATE burgers SET devoured = true WHERE id =" + id

        connection.query(query, (err, res) => {
            if (err) {
                throw err
            }
            cb(res)
        })
    }
}



module.exports = orm