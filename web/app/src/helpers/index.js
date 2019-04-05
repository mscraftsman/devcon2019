/**
 * Extract the intended array of objects required for the app.
 * @param {array} entries Raw entries from the spreadsheet API
 * @returns an array of objects that follows the expected format.
 */
export function extractData(entries) {
  return entries.map(extractObject);
}

function extractObject(entry) {
  const fieldNameList = Object.keys(entry).filter(fieldName => fieldName.includes("gsx$"));

  const formattedObjet = {};
  fieldNameList.forEach(fieldName => {
    const trimmedName = fieldName.replace("gsx$", "");
    formattedObjet[trimmedName] = entry[fieldName][`$t`];
  });

  return formattedObjet;
}

export const time = function(date) {
  let time = new Date(date);
  let hours = time.getHours();
  hours = (hours + 24) % 24;
  let period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || hours;
  let minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  return hours + ":" + minutes + " " + period;
};

export const timeSafe = function(date) {
  // let time = new Date(date);
  // let hours = time.getHours();
  // hours = (hours + 24) % 24;
  // let period = hours < 12 ? "AM" : "PM";
  // hours = hours % 12 || hours;
  // console.log(date);
  // let minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  // console.log(period + hours + minutes);

  let x = date
    .split("T")[1]
    .split(":")
    .map(r => parseInt(r, 10));
  let y = (x[0] < 12 ? "AM" : "PM") + x[0] + ((x[1] + "").length ? "0" + x[1] : "" + x[2]);
  // console.log(y);
  return y;
  // return period + hours + minutes;
};

export const getDay = function(str) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = new Date(str);
  return days[day.getDay()];
};
