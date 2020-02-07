// require db from models
const db = require('../models');

module.exports = function(app) {

    // this is our create burger route
    app.post("/burgers", async function(req, res) {
        try {
            const burger = await db.Burger.create({ name: req.body.name, isDevoured: req.body.isDevoured});
            res.json(burger);
        }
        catch (error) {
            console.log(error);
        }
    });


    // this is the route to get ALL of the burgers
    app.get("/api/burgers", (req, res) => {
        db.Burger.findAll({}).then(burger => {
            res.json(burger);
        }).catch(function(error){console.log(error)});
    });

    //update the burgers route
    app.post("/api/burgers", async function(req, res) {
        const burger = await db.Burger.update({ isDevoured: '1'}, { where: { id: req.body.id} });
        res.json(burger);
    });
}