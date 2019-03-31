/**
 *
 * @param object
 */
function validateRequest({ requestData, responseCallback, applicationContext }) {
    if (!requestData || !responseCallback || !applicationContext) throw new Error("Hey programmer - at least one of your interactor request parameters is shit.")
}

exports.validateRequest = validateRequest;