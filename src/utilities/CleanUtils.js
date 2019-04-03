/**
 *
 * @param data
 * @param dataSchema
 * @param applicationContext
 */
function validateRequestData({ data, dataSchema, applicationContext }) {
  if (!data || !dataSchema || !applicationContext) {
    throw new Error(
      'Hey programmer - at least one of your request parameters is shit.',
    );
  }
  const validationResult = applicationContext
    .getJsonValidator()
    .validateJson(data, dataSchema);
  if (validationResult) throw new Error(JSON.stringify(validationResult));
}

module.exports = { validateRequestData };
