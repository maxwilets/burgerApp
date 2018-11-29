var orm = require('../config/orm.js')

var burgerModel = {
    allBurgers: (cb) =>{
        orm.selectAll('burgers', (res)=>{
            cb(res)
        }) 
    },
    addBurger: (name, cb) =>{
        orm.insertOne('burgers', ['burger_name'], name, (res)=>{
            cb(res)
        })
    },
    updateBurger:(objVal, condition,cb) =>{
        orm.updateOne('burgers', objVal, condition, (res)=>{
            cb(res)
        })
    }
}

module.exports(burgerModel)