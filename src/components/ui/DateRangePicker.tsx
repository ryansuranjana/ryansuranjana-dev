"use client";

import React, { useState, useEffect } from "react";
import { addDays, format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaAngleDown, FaCalendar } from "react-icons/fa6";
import { DateRange } from "react-day-picker";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function DateRangePicker() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    console.log("params : ", params);

    params.set("page", "1");

    if (date?.from && date?.to) {
      params.set("from", date?.from?.toISOString().split("T")[0].toString());
      params.set("to", date?.to?.toISOString().split("T")[0].toString());
    } else {
      if (params.get("from") && params.get("to")) {
        setDate({
          from: new Date(params.get("from") as string),
          to: new Date(params.get("to") as string),
        });
      } else {
        params.delete("from");
        params.delete("to");
      }
    }

    replace(`${pathname}?${params.toString()}`);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="px-6 py-1 border border-[#274643] rounded-md flex items-center">
          <div className="flex items-center gap-2 mr-4">
            <FaCalendar size={14} className="dark:text-[#8B949E] text-black" />{" "}
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>All Time</span>
            )}
          </div>
          <FaAngleDown size={14} className="dark:text-[#8B949E] text-black" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
