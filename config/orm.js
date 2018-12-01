var connection = require('../config/connection')



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