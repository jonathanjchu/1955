const People = require("../controllers/people");

module.exports = (app) => {
    app.get("/api/people", People.getAll);
    app.get("/api/new/:name", People.create);
    app.get("/api/remove/:name", People.delete);
    app.get("/api/:name", People.getPerson);
}