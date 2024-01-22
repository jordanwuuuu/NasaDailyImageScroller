import { subDays } from "date-fns";

export function getFeedFormattedDate(daysBefore) {
  //Formatted date example: "1996-01-21"
  const dateToReturn = daysBefore ? subDays(new Date(), daysBefore) : new Date();
  const date = dateToReturn.getDate();
  const month = dateToReturn.getMonth() + 1;
  const year = dateToReturn.getFullYear();

  const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`
  return formattedDate

}
