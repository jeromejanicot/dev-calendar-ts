import { createElement } from "react";
import { GenerateYearType } from "../lib/getDays";
import { genCalStruc } from "../lib/generateCalendar";

const weekDaysEn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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
                <td className="bg-blue-800 border-solid border-white border-2 relative w-1/7 pb-40">
                  <div className="absolute w-full h-full top-50%">{cell}</div>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
