import { DayNode, allDays, getFirstDayYear } from "./getDays";

export function genCalStruc(year: number) {
  let allDaysArray = allDays(year);
  let firstDayYearNumber = getFirstDayYear(year);

  let blanks = [];
  for (let i = 0; i < firstDayYearNumber; i++) {
    blanks.push(undefined);
  }

  let daysInYear: DayNode[] = [];
  for (let d = 0; d < allDaysArray.length; d++) {
    daysInYear.push(allDaysArray[d]);
  }

  let totalDays = [...blanks, ...daysInYear];
  let rows: (DayNode | undefined)[][] = [];
  let cells: (DayNode | undefined)[] = [];

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
