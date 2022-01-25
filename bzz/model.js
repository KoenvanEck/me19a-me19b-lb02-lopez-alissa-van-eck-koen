const sql = require('../db');

module.exports = class Students{
    constructor(){
    }

    // Neuen Studenten erstellen
    create(newStudents, cbResult) {
        sql.query('INSERT INTO students SET ?', newStudents, (err,result) => {
            if (err) {
                console.log('error: ',err);
                cbResult(err,null);
                return;
            }
            console.log('created bzz: ', {id: result.insertId, ...newStudents});
            cbResult(null,{
                msg: "Neues BZZ-Mitglied wurde erstellt!", id: result.insertId, ...newStudents});
            })

    }

    // Alle Studenten anzeigen
    getAll(cbResult){
        sql.query('SELECT * FROM students', (err,result) => {
            if (err){
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }
            console.log("students: ", result);
            //err = null, data zurückgeben
            cbResult(null, result);
        })
    }

    // Students aktualisieren
    updateById(id,students, cbResult) {
        let queryString = 'Update students SET studentFirstName = ?, year = ?';
        queryString += ' WHERE studentID = ?';
        sql.query(queryString,
            [students.studentFirstName, students.year, parseInt(id)],
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    //err zurückgeben, data = null
                    cbResult(err, null);
                    return;
                }

                if (result.affectedRows === 0) {
                    // not found customer with the id
                    cbResult({kind: "not_found"}, null);
                    return;
                }

                console.log("updated students: ", {id: id, ...students});
                //err = null, data zurückgeben
                cbResult(null, {id: id, ...students});

            })
    }

    // Student entfernen
    remove(id,students, cbResult){
        sql.query('DELETE FROM students WHERE studentID = ?', id, (err, result) => {
            if (err) {
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }

            if (result.affectedRows === 0) {
                // not found customer with the id
                cbResult({kind: "not_found"}, null);
                return;
            }

            console.log("Entfernung von Student mit der id: ", id);
            //err = null, data zurückgeben
            cbResult(null, id);
        });
    }
}