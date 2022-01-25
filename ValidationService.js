// Validate form input elements
const validateLib = require('./ValidationLib');

/* Validate form data
 * @param data
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */

function validateFormData(data) {

    // Kontrolle von den erforderlichen Feldern
    result = validateLib.checkRequired("studentID", data.studentID);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("studentFirstName", data.studentFirstName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("studentLastName", data.studentLastName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", data.phone);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", data.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("grades", data.grades);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("year", data.year);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("teacher", data.teacher);
    if (result.isNotValid) { return result; }

    // Kontrolle der Länge
    result = validateLib.checkLength("studentID", data.studentID, 1, 10);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("studentFirstName", data.studentFirstName, 1, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("studentLastName", data.studentLastName, 1, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("phone", data.phone, 1, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("grades", data.grades, 1, 10);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("year", data.year, 1, 4);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("teacher", data.teacher, 1, 20);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", data.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

module.exports = {
    validateStudents: validateFormData
}
