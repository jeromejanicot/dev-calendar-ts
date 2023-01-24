import { useState, useEffect } from "react";
import { DayNode } from "../lib/getDays";

type Props = {
  row: (DayNode | undefined)[];
  showScroll: boolean;
};

export default function CalendarRow({ row, showScroll }: Props) {
  return (
    <tr>
      {row.map((cell, i) =>
        typeof cell !== undefined ? (
          <td
            key={i}
            className={
              cell == undefined
                ? "bg-gray-800 border-solid border-white border-2 relative w-1-7"
                : (cell?.month && cell.month + 1 === 1) ||
                  (cell?.month && cell.month % 2 == 0)
                ? "bg-blue-800 border-solid border-white border-2 relative w-1/7"
                : "bg-red-800 border-solid border-white border-2 relative w-1/7"
            }
          >
            <div className="w-full h-full flex-auto flex-col">
              {cell?.dayNumber == 1 ? (
                <div className="text-left text-4xl">{cell?.monthName}</div>
              ) : (
                <span></span>
              )}
              <div>{cell?.dayName}</div>
              <div>{cell?.dayNumber}</div>
            </div>
          </td>
        ) : (
          <td>""</td>
        )
      )}
    </tr>
  );
}
