import { createElement } from "react";
import { GenerateYearType } from "../lib/getDays";
import { genCalStruc } from "../lib/generateCalendar";

const weekDaysEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const rows = genCalStruc(2022);

export default function Calendar({
  firstDayYearName,
  firstDayYearNumber,
  arrayMonths,
}: GenerateYearType) {
  return (
    <>
      <div className="w-full">
        <table className="w-full">
          <tr>
            {weekDaysEn.map((day, index) => (
              <th key={index} className="w-1/7">
                {day}
              </th>
            ))}
          </tr>
          {rows.map((row, i) => (
            <tr>
              {row.map((cell, i) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
