// categrories.route.js

const express = require('express');
const catergoryRoutes = express.Router();

// Require Business model in our routes module
let Category = require('./categrories.model');

// Defined store route
catergoryRoutes.route('/add').post(function (req, res) {
    let categrory = new Category(req.body);
    categrory.save()
        .then(categrory => {
            res.status(200).json({'Category': 'Category in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
catergoryRoutes.route('/').get(function (req, res) {
    Category.find(function(err, categories){
        if(err){
            console.log(err);
        }
        else {
            res.json(categories);
        }
    });
});

// Defined edit route
catergoryRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Category.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
catergoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function(err, category) {
        if (!category)
            res.status(404).send("data is not found");
        else {
            console.log(category);
            category.name = req.body.name;
            category.status = req.body.status;

            category.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
catergoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = catergoryRoutes;