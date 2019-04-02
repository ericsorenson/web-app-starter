/**
*
* @param object
*/
function validateJson(data, schema) {
    var Ajv = require('ajv');
    var ajv = new Ajv({ allErrors: true, jsonPointers: true, verbose: false, messages: false });
    require('ajv-errors')(ajv);
    var validate = ajv.compile(schema);
    var valid = validate(data);
    if (!valid) {
        console.log(validate.errors);
        return validate.errors;
    }
}

module.exports = { validateJson };
