const students = require('./controller');
module.exports = app => {
    // Neuer Student erstellen
    app.post("/students", students.create);

    app.get("/students", students.findAll);

    app.put("/students/:id", students.update);

    app.delete("/students/:id", students.remove);

}