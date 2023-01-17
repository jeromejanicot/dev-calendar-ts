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

export const getDayName = (
  year: number,
  month: number,
  day: number,
  locale: string
) => {
  return new Date(year, month, day).toLocaleDateString(locale, {
    weekday: "long",
  });
};

export type DayNode = {
  dayNumber: number;
  dayName: string;
  month: number;
};

export function allDays(year: number) {
  let daysOfYear: DayNode[] = [];

  for (let m = 0; m < 12; m++) {
    for (let d = 1; d < daysInMonth(year, m); d++) {
      daysOfYear.push({
        dayNumber: new Date(year, m, d).getDate(),
        dayName: getDayName(year, m, d, localeEN),
        month: m,
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
