const mongoose = require("mongoose");
const Person = mongoose.model("Person");

class People {
    getAll(req, res) {
        Person.find({}, (err, people) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: "ok",
                people: people
            });
        });
    }

    create(req, res) {
        let arr = req.params.name.split(' ');
        let fname = arr[0];
        let lname = arr[1];

        Person.create({ first_name: fname, last_name: lname, year: 1955 }, (err) => {
            if (err) {
                console.log(err);
                res.json({
                    status: err
                });
            }
            else {
                res.json({
                    status: "ok"
                });
            }
        });
    }

    delete(req, res) {
        let arr = req.params.name.split(' ');
        let fname = arr[0];
        let lname = arr[1];

        Person.deleteOne({ first_name: fname, last_name: lname }, (err) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: "ok"
            });
        })
    }

    getPerson(req, res) {
        let arr = req.params.name.split(' ');
        let fname = arr[0];
        let lname = arr[1];

        Person.findOne({ first_name: fname, last_name: lname }, (err, person) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: "ok",
                person: person
            });
        });
    }
}

module.exports = new People();