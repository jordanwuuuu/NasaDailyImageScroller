export function getLastFiveDays(dateValue) {
  // 1997-12-25 example
  const arrayOfDate = dateValue.split("-");
  const currentDay = arrayOfDate[2];
  const currentMonth = arrayOfDate[1];
  let newDay;
  let newMonth;
  let newYear;
  // if month is 01,03,05,07,09,11 days = 31
  if (parseInt(currentMonth) % 2 !== 0) {
    // month has 31 days
    if (parseInt(currentDay) !== 1) {
      if (parseInt(currentDay) < 10) {
        newDay = `0${parseInt(currentDay) - 1}`;
      } else {
        newDay = parseInt(currentDay) - 1;
      }
    } else {
      // previous month
      newMonth = parseInt(currentMonth) - 1;
      if (newMonth === 2) {
        newDay = "28"; // leap years?
      }
    }
  } else if (parseInt(currentMonth) === 2) {
    // february
  } else {
    // month has 30 days
  }
}
