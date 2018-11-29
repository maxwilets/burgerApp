var express = require('express')
var burger = require('../models/burger.js')
var burger = new Burger


router.get("/", (req, res) => {
    burger.allBurgers((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.addBurger([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        res.json({
            id: result.insertId
        })
    })
})

router.put('/api/burger/:id', (req, res) => {
    var condition = 'id=' + req.params.id
    burger.updateBurger({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end
        }
    })
})

module.exports = router