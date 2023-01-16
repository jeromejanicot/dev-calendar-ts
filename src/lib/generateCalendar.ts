import { allDays, getFirstDayYear } from "./getDays";
// Function that creates and fill a table representing a calendar year.
// Takes an array of all the days and month of the year.

export function genCalStruc(year: number) {
  let allDaysArray = allDays(year);
  let firstDayYearNumber = getFirstDayYear(year);

  let blanks = [];
  for (let i = 0; i < firstDayYearNumber; i++) {
    blanks.push("");
  }

  let daysInYear = [];
  for (let d = 0; d < allDaysArray.length; d++) {
    daysInYear.push(`${allDaysArray[d].dayName}`);
  }

  let totalDays = [...blanks, ...daysInYear];
  let rows: string[][] = [];
  let cells: string[] = [];

  totalDays.forEach((row, i) => {
    if (i % 7 != 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalDays.length - 1) {
      rows.push(cells);
    }
  });

  return rows;
}
