const localeEN = "en-US";

export const getFirstDayYear = (year: number) => {
  return new Date(year, 0, 1).getDay();
};

export const getFirstDayMonth = (year: number, month: number) => {
  return new Date(year, month).getDay();
};

export const daysInMonth = (year: number, month: number) => {
  return 33 - new Date(year, month, 32).getDate();
};

export const getDateName = (
  year: number,
  month: number,
  locale: string,
  day?: number
) => {
  if (day) {
    return new Date(year, month, day).toLocaleDateString(locale, {
      weekday: "long",
    });
  }
  return new Date(year, month).toLocaleDateString(locale, {
    month: "long",
  });
};

export type DayNode = {
  dayNumber: number;
  dayName: string;
  month: number;
  monthName: string;
};

export function allDays(year: number) {
  let daysOfYear: DayNode[] = [];

  for (let m = 0; m < 12; m++) {
    for (let d = 1; d < daysInMonth(year, m); d++) {
      daysOfYear.push({
        dayNumber: new Date(year, m, d).getDate(),
        dayName: getDateName(year, m, localeEN, d),
        month: m,
        monthName: getDateName(year, m, localeEN),
      });
    }
  }

  return daysOfYear;
}

export type MonthNode = {
  indexOfMonth: number;
  firstDay: number;
  numberOfDays: number;
};

export type GenerateYearType = {
  firstDayYearName: string;
  firstDayYearNumber: number;
  arrayMonths: MonthNode[];
};
