const Students = require('./model');
const Validation = require('../ValidationService');
const HTTP_STATUS = require('../config/httpcodes.config');

// CRUD: CREATE

// Neuer Students Object erstellen
const studentsObj = new Students();

// Neuer Students Object erstellen und speichern
function create(req,res){
    // Anfrage validieren lassen
    if (!req.body){
        res.status(HTTP_STATUS.BAD_REQUEST).send({
            message: "Dieses Feld darf nicht leer sein!"
        });
    }
    // Daten aus der Anfrage
    let data = {
    "studentID": req.body.studentID,
    "studentFirstName": req.body.studentFirstName,
    "studentLastName": req.body.studentLastName,
    "phone": req.body.phone,
    "email": req.body.email,
    "grades": req.body.grades,
    "year": req.body.year,
    "teacher": req.body.teacher
    }

    console.log('Following data parsed from body ...');
    console.log(data);

    let result = Validation.validateStudents(data);
    if (result.isNotValid){
        res.status(HTTP_STATUS.NOT_ACCEPTABLE).send(result.msg);
    }
    else {
        // Student in Tabelle speichern
        studentsObj.create(data, (err,result) =>{
            if (err){
                res.status(HTTP_STATUS.SERVER_ERROR).send({
                    message: err.message || "Ein Fehler ist aufgetaucht beim Erstellen eines neuen Student!"
                })
            } else {
                res.status(HTTP_STATUS.SUCCESSFUL_CREATED).send(result);
            }
        })
    }
}

//Alle Daten aus der Tabelle lesen
function findAll(req,res){
    studentsObj.getAll((err,result) => {
        if (err) {
            res.status(HTTP_STATUS.SERVER_ERROR).send({
                message:
                    err.message || "Ein Fehler ist aufgetreten"
            });
        } else {
            res.send(result);
        }
    })
}

// Student aktualisieren
function update(req,res){
    // Anfrage validieren lassen
    if (!req.body){
        res.status(HTTP_STATUS.BAD_REQUEST).send({
            message: "Dieses Feld darf nicht leer sein!"
        });
    }
    console.log(req.body);

    studentsObj.updateById(req.params.id, req.body, (err,result) => {
        if (err) {
            if (err.kind === "not_found"){
                res.status(HTTP_STATUS.NOT_FOUND).send({
                    message: `Konnte nicht gefunden werden: Student mit ID ${req.params.id}.`
                });
            } else {
                res.status(HTTP_STATUS.SERVER_ERROR).send({
                    message: `Fehler beim Update des Students mit ID ${req.params.id}.`
                })
            }
        } else res.send(result);
    })
}

// Student löschen
function remove(req,res){
    studentsObj.remove((err,result) => {
        if (err) {
            if (err.kind === "not_found"){
                res.status(HTTP_STATUS.NOT_FOUND).send({
                    message: `Konnte nicht gefunden werden: Student mit ID ${req.params.id}.`
                });
            } else {
                res.status(HTTP_STATUS.SERVER_ERROR).send({
                    message: `Fehler bei der Entfernung des Students mit ID ${req.params.id}.`
                })
            }
        } else res.send(result);
    })
}

module.exports = {
    create,
    findAll,
    update,
    remove
}