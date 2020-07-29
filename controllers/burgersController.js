const express = require("express");

const router = express.Router();

// Import the model (burgers.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let handlebarsObject = {
      burgers: data
    };
    res.render("index", handlebarsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function() {
    // Send back the ID of the new burger
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  let condition = "id = " + req.body.id;

  burger.updateOne(
    { devoured : true },
    condition,
    function(result) {
      if (result.changedRows === 1) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
