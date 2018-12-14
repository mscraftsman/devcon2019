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
