// Show input error message

/*
 * Beschreibung
 * @param id: Identifikation des eingegebenen Datenelement
 * @param message: Fehlermeldung
 * @returns {string}
 */
function showError(id, message) {
    return `${id}: ${message}`;
}

// Erfolg anzeigen
function showSuccess(id) {
    return `${id} successfully validated!`;
}

// Validierung Email
function checkEmail(id, input) {
    //Standard: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}

// Erforderliche Felder checken
function checkRequired(id, input) {
    //Standard: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //Wenn der Input leer ist, ist es nicht valid
    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //Validierungsresultat anzeigen
    return result;
}

//Länge checken
function checkLength(id, input, min, max) {
    //Standard: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    //Validierungsresultat anzeigen
    return result;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    checkEmail,
    checkLength,
    checkRequired
}
