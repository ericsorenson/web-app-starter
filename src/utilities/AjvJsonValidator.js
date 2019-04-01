/**
*
* @param object
*/
function validate(data, schema) {
    var Ajv = require('ajv');
    var ajv = new Ajv({ allErrors: true, jsonPointers: true, verbose: false, messages: false }); // options can be passed, e.g. {allErrors: true}
    var validate = ajv.compile(schema);
    var valid = validate(data);
    if (!valid) console.log(validate.errors);
}

module.exports = { validate };
