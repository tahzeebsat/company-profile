function CardExpiryFormat(e) {
  var inputChar = String.fromCharCode(event.keyCode);
  var code = event.keyCode;
  var allowedKeys = [8];

  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  // Get the current month and year
  var today = new Date();
  var currentMonth = today.getMonth() + 1; // Months are zero-indexed
  var currentYear = today.getFullYear() % 100; // Get the last two digits of the year

  // Format the value
  event.target.value = event.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );

  // Validate the date
  var parts = event.target.value.split("/");
  console.log(parts);
  if (parts.length === 2) {
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);
    const monthboolmin = month < currentMonth;
    if (parts[1].length > 1) {
      const yearboolmin = year < currentYear;
      const yearboolmax = year > currentYear;
      const yearboolequal = year == currentYear;
      if (monthboolmin && yearboolequal) {
        InvalidDateError("error");
      } else if (monthboolmin && yearboolmax) {
        InvalidDateError("");
      } else if (monthboolmin && yearboolmin) {
        InvalidDateError("error");
      } else if (yearboolmax) {
        return;
      } else if (yearboolmin) {
        InvalidDateError("error");
      } else {
        InvalidDateError("");
      }
    }
  } else if (event.target.value.trim() === "") {
    InvalidDateError("");
  }
}
function InvalidDateError(msg) {
  document.getElementById("expiry_date_err").innerText =
    msg === "error" ? "Invalid Expiration Date" : "";
  if (msg === "reset") {
    const inputvalclr = document.getElementsByClassName("expiry-input")[0];
    inputvalclr.value = null;
  }
}
// const monthboolmax = month > currentMonth;
// const monthboolequal = month == currentMonth;
// 1
// event.target.value = `${"0" + currentMonth}/${year}`;
// 2
// event.target.value = `${"0" + currentMonth}/${currentYear}`;
// 3
// event.target.value = `${
//   month < 10 ? "0" + month : month
// }/${currentYear}`;
