/**
 * Extract the expected format expected by the app.
 *
 * @export
 * @param {array} feedEntry The entries provided by the API. `feed.entry`.
 * @param {array} fieldNames List of fields we want to extract. They must map ones in the sheet.
 * @returns an array of objects that follows the expected format.
 */
export function extractFields(feedEntry, fieldNames) {
  return feedEntry.map(entry => extractField(fieldNames, entry));
}

function extractField(fieldNames, entry) {
  const formattedObjet = {};
  fieldNames.forEach(field => {
    formattedObjet[field] = entry[`gsx$${field}`][`$t`];
  });
  return formattedObjet;
}

/**
 * Extract the intended array of objects required for the app.
 * @param {array} entries Raw entries from the spreadsheet API
 * @returns an array of objects that follows the expected format.
 */
export function extractData(entries) {
  return entries.map(extractObject);
}

function extractObject(entry) {
  const fieldNameList = Object.keys(entry).filter(fieldName =>
    fieldName.includes("gsx$")
  );

  const formattedObjet = {};
  fieldNameList.forEach(fieldName => {
    const trimmedName = fieldName.replace("gsx$", "");
    formattedObjet[trimmedName] = entry[fieldName][`$t`];
  });

  return formattedObjet;
}
