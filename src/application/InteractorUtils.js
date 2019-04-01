/**
 *
 * @param object
 */
function validateRequest({ requestData, requestDataSchema, responseCallback, applicationContext }) {
    if (!requestData || !requestDataSchema || !responseCallback || !applicationContext) {
        throw new Error("Hey programmer - at least one of your interactor request parameters is shit.")
    }
}

exports.validateRequest = validateRequest;