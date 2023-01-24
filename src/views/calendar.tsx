import { useEffect, useMemo, useCallback, useState } from "react";
import { GenerateYearType } from "../lib/getDays";
import { genCalStruc } from "../lib/generateCalendar";
import _ from "lodash";
import CalendarRow from "../components/CalendarRows";

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
  const [showScroll, setShowScroll] = useState(false);

  const listenToScroll = () => {
    setShowScroll(true);

    setTimeout(() => setShowScroll(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <table className="w-full">
          <thead>
            <tr>
              {weekDaysEn.map((day, index) => (
                <th key={index} className="w-1/7">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <CalendarRow key={i} row={row} showScroll={showScroll} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
