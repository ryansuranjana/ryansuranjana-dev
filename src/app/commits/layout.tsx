import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import {
  FaCodeBranch,
  FaAngleDown,
  FaCheck,
  FaCodePullRequest,
  FaCalendar,
} from "react-icons/fa6";
import type { Metadata } from "next";
import { DateRangePicker } from "@/components/ui/DateRangePicker";

export const metadata: Metadata = {
  title: "Ryan Suranjana | Commits",
  description: "Web Developer, Mobile Developer",
};

const CommitsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 pb-12">
      <p className="font-semibold text-lg mb-4">Commits</p>
      <hr className="dark:border-[#FFFFFF]/30 border-black" />
      <div className="mt-6 flex md:flex-row flex-col w-full md:items-center items-start justify-between md:gap-0 gap-4">
        <div className="flex gap-4 md:order-1 order-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="px-6 py-1 border border-[#274643] rounded-md flex items-center">
                <div className="flex items-center gap-2 mr-4">
                  <FaCodeBranch
                    size={14}
                    className="dark:text-[#8B949E] text-black"
                  />{" "}
                  words
                </div>
                <FaAngleDown
                  size={14}
                  className="dark:text-[#8B949E] text-black"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-[#274643]">
              <DropdownMenuLabel>
                <p className="font-semibold">Branches</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#274643]" />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <FaCheck size={14} className="dark:text-[#8B949E]" /> words
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="md:flex items-center gap-2 hidden">
            <FaCodeBranch
              size={14}
              className="dark:text-[#C9D1D9] text-black"
            />
            <div className="dark:text-[#8B949E] text-black">
              <span className="dark:text-[#C9D1D9] text-black">1</span> branches
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-4 md:order-2 order-1">
          <div className="px-6 py-1 border border-[#274643] rounded-md flex items-center cursor-pointer">
            <div className="flex items-center gap-2">
              <FaCodePullRequest
                size={14}
                className="dark:text-[#8B949E] text-black"
              />{" "}
              Pull Requests
            </div>
          </div>
          <DateRangePicker />
          {/* <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="px-6 py-1 border border-[#274643] rounded-md flex items-center">
                <div className="flex items-center gap-2 mr-4">
                  <FaCalendar
                    size={14}
                    className="dark:text-[#8B949E] text-black"
                  />{" "}
                  All Time
                </div>
                <FaAngleDown
                  size={14}
                  className="dark:text-[#8B949E] text-black"
                />
              </div>
            </DropdownMenuTrigger>
          </DropdownMenu> */}
        </div>
      </div>

      {children}
    </div>
  );
};

export default CommitsLayout;
