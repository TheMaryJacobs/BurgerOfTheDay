const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.get("/api/burgers", async function(req,res){
        try{
            const allBurgers = await db.Burgers.findAll()
            res.json(allBurgers)
        }
        catch(err){
            console.log("Error getting all burgers from the database: ", err)
        }
    })
    
    app.post("/api/burgers", async function(req, res){
        const {burgerName} = req.body;
        try{
            const newBurger = await db.Burgers.create({burger_name: burgerName})
            res.json(newBurger)
        }
        catch(err){
            console.log("Error creating a new burger: ", err)
        }
    })

    app.put("/api/burgers/:id", async function(req, res){
        const BurgerToDevour = req.params.id;
        try{
            const burgerDevoured = await db.Burgers.update({devoured: true},{where:{id: burgerToDevour}})
            res.json(burgerDevoured)
        }
        catch(err){
            console.log("Error creating a new burger: ", err)
        }
    })
}