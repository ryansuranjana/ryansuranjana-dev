import React from "react";
import ProfileImg from "@/assets/img/me.jpeg";
import Image from "next/image";
import { BsSuitHeart } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { IoGitCommit } from "react-icons/io5";

const Words = () => {
  return (
    <div className="mt-12">
      <div className="flex gap-3 items-center pl-1">
        <IoGitCommit size={25} className="dark:text-white/60 text-black" />
        <p className="text-sm dark:text-white/60 text-black">
          Commits on 10 Aug, 2024
        </p>
      </div>
      <div>
        <div className="border-l-2 border-l-[#274643] h-4 ml-4"></div>
        <div className="border border-[#274643] rounded-lg">
          <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between px-7 py-5">
            <div className="flex flex-col gap-2">
              <p className="md:text-xl text-lg font-medium">
                Panjang umur untuk semua alasan dari keberadaan, tawa dan syukur
              </p>
              <div className="flex gap-2">
                <Image
                  src={ProfileImg}
                  alt="author"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                  ryansuranjana.dev commited yesterday
                </p>
              </div>
            </div>
            <div className="flex gap-4 self-end md:self-center">
              <p className="font-bold text-xs">a3fb50</p>
              <BsSuitHeart
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
              <GrSend
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
            </div>
          </div>
          <div className="border-[0.8px] border-[#274643]"></div>
          <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between px-7 py-5">
            <div className="flex flex-col gap-2">
              <p className="md:text-xl text-lg font-medium">
                Kesederhanaan semesta yang sulit dijelaskan
              </p>
              <div className="flex gap-2">
                <Image
                  src={ProfileImg}
                  alt="author"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                  ryansuranjana.dev commited yesterday
                </p>
              </div>
            </div>
            <div className="flex gap-4 self-end md:self-center">
              <p className="font-bold text-xs">a3fb50</p>
              <BsSuitHeart
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
              <GrSend
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
            </div>
          </div>
        </div>
        <div className="border-l-2 border-l-[#274643] h-4 ml-4"></div>
      </div>
      <div className="flex gap-3 items-center pl-1">
        <IoGitCommit size={25} className="dark:text-white/60 text-black" />
        <p className="text-sm dark:text-white/60 text-black">
          Commits on 8 Aug, 2024
        </p>
      </div>
      <div>
        <div className="border-l-2 border-l-[#274643] h-4 ml-4"></div>
        <div className="border border-[#274643] rounded-lg">
          <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between px-7 py-5">
            <div className="flex flex-col gap-2">
              <p className="md:text-xl text-lg font-medium">
                Kalau dibilang beruntung, ya beruntung, ditimpa masalah berulang
                kali, tapi masih bisa selamat
              </p>
              <div className="flex gap-2">
                <Image
                  src={ProfileImg}
                  alt="author"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                  ryansuranjana.dev commited 5 days ago
                </p>
              </div>
            </div>
            <div className="flex gap-4 self-end md:self-center">
              <p className="font-bold text-xs">a3fb50</p>
              <BsSuitHeart
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
              <GrSend
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
            </div>
          </div>
          <div className="border-[0.8px] border-[#274643]"></div>
          <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between px-7 py-5">
            <div className="flex flex-col gap-2">
              <p className="md:text-xl text-lg font-medium">
                Terkadang, kita belajar menjadi kuat bukan saat berpegangan
                tangan, tapi ketika harus melepaskan genggaman
              </p>
              <div className="flex gap-2">
                <Image
                  src={ProfileImg}
                  alt="author"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <p className="text-xs font-medium dark:text-[#FFFFFF]/60 text-black">
                  ryansuranjana.dev commited 5 days ago
                </p>
              </div>
            </div>
            <div className="flex gap-4 self-end md:self-center">
              <p className="font-bold text-xs">a3fb50</p>
              <BsSuitHeart
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
              <GrSend
                size={20}
                className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
