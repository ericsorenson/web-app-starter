/**
 *
 * @param object
 */
function validateRequest({ requestData, requestDataSchema, responseCallback, applicationContext }) {
    if (!requestData || !responseCallback || !applicationContext) {
        throw new Error("Hey programmer - at least one of your interactor request parameters is shit.")
    }
    const validationResult = applicationContext.getJsonValidator().validateJson(requestData, requestDataSchema);
    if (validationResult) throw new Error (JSON.stringify(validationResult));
}

module.exports = { validateRequest };