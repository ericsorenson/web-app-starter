/**
 *
 * @param object
 */
function validateRequestData({ requestData, requestDataSchema, applicationContext }) {
    if (!requestData || !requestDataSchema || !applicationContext) {
        throw new Error("Hey programmer - at least one of your interactor request parameters is shit.")
    }
    const validationResult = applicationContext.getJsonValidator().validateJson(requestData, requestDataSchema);
    if (validationResult) throw new Error (JSON.stringify(validationResult));
}

module.exports = { validateRequestData };