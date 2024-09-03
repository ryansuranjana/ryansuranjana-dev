"use client";

import React, { useMemo } from "react";
import ProfileImg from "@/assets/img/me.jpeg";
import Image from "next/image";
import { BsSuitHeart } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { IoGitCommit } from "react-icons/io5";
import moment from "moment";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCommitWords } from "@/lib/data/commits";
import { useSearchParams } from "next/navigation";
import LikesButton from "@/components/ui/commits/words/LikesButton";

const Words = () => {
  const searchParams = useSearchParams();

  const { data: res } = useInfiniteQuery({
    queryKey: [
      "commits-words",
      searchParams.get("page"),
      searchParams.get("from") as string,
      searchParams.get("to") as string,
    ],
    queryFn: ({ pageParam }) =>
      fetchCommitWords({
        page: pageParam,
        from: searchParams.get("from") as string,
        to: searchParams.get("to") as string,
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const data = useMemo(() => {
    return res?.pages.reduce((acc, page) => {
      if (acc && page) {
        return [...acc, ...page];
      }
    }, []);
  }, [res]);

  return (
    <div className="mt-12">
      {data &&
        data?.map((commit, i: number) => (
          <div key={i}>
            <div className="flex gap-3 items-center pl-1">
              <IoGitCommit
                size={25}
                className="dark:text-white/60 text-black"
              />
              <p className="text-sm dark:text-white/60 text-black">
                Commits on {moment(commit.date).format("ll")}
              </p>
            </div>
            <div>
              <div className="border-l-2 border-l-[#274643] h-4 ml-4"></div>
              <div className="border border-[#274643] rounded-lg">
                {commit?.commits?.map((value: any, j: number) => (
                  <div key={j}>
                    <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between px-7 py-5">
                      <div className="flex flex-col gap-2">
                        <p className="md:text-xl text-lg font-medium">
                          {value.commitMessage}
                        </p>
                        <div className="flex gap-2">
                          {value.isAdmin ? (
                            <>
                              <Image
                                src={ProfileImg}
                                alt="author"
                                width={18}
                                height={18}
                                className="rounded-full"
                              />
                              <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                                ryansuranjana.dev commited{" "}
                                {moment(value.createdAt)
                                  .subtract(0, "days")
                                  .format("DD MMMM YYYY")}
                              </p>
                            </>
                          ) : (
                            <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                              {value.contributor}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-4 self-end md:self-center">
                        <p className="font-bold text-xs">{value.code}</p>
                        <LikesButton id={value.id} />
                      </div>
                    </div>
                    {j !== commit.commits.length - 1 && (
                      <div className="border-[0.8px] border-[#274643]"></div>
                    )}
                  </div>
                ))}
              </div>
              {i !== data.length - 1 && (
                <div className="border-l-2 border-l-[#274643] h-4 ml-4"></div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Words;
