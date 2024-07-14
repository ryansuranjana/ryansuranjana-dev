import Header from "@/components/partials/Header";
import Image from "next/image";
import ProfileImg from "@/assets/img/me.png";
import { IoLogoInstagram, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5"
import { SiPhp, SiExpo, SiReact, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export default function Home() {
    return (
        <main className="w-full md:w-[60%] md:px-0 px-5 mx-auto">
            <Header />

            <section>
                <div className="mt-12 flex flex-col gap-4">
                    <Image src={ProfileImg} alt="ryansuranjana-img" width={150} height={150} className="rounded-full" />
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-2xl">I Putu Ryan Suranjana</h2>
                        <p className="font-light">Web Dev | Mobile Dev</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/rsuranjana14" target="_blank">
                            <IoLogoInstagram size={40} color="#3BCEC6" />
                        </a>
                        <a href="mailto:ryansuranjana23@gmail.com" target="_blank">
                            <IoMdMail size={40} color="#3BCEC6" />
                        </a>
                        <a href="http://www.linkedin.com/in/ryan-suranjana" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin size={40} color="#3BCEC6" />
                        </a>
                    </div>
                </div>
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis, natus cupiditate, et maiores, perferendis incidunt exercitationem quasi molestiae aspernatur nostrum repudiandae ullam corporis itaque ratione? Sit
                    asperiores expedita ex eaque nobis quam fugiat voluptatum minima soluta omnis qui aspernatur corrupti voluptatibus nulla laboriosam iusto vero, odio libero eius alias! Consectetur eum officiis corporis laudantium, ipsam
                    natus veritatis fugiat, sequi impedit dicta voluptates, fugit aliquid soluta deserunt tempore aliquam ipsa? Vero repudiandae et, veniam suscipit quibusdam hic aspernatur quam nostrum sapiente sint consectetur ex quia
                    earum, nihil est ducimus modi deleniti quod doloribus, harum corrupti unde. Recusandae ea veniam eius.
                </p>
            </section>

            <section className="mb-4">
              <h4 className="font-bold text-lg md:text-xl text-[#3BCEC6] mb-2">Skills</h4>
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base">Programming Languanges</p>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <IoLogoJavascript size={15} color="#F7DF1E" />
                    <p className="text-[10px] md:text-xs">Javascript</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <BiLogoTypescript  size={15} color="#3178C6" />
                    <p className="text-[10px] md:text-xs">Typescript</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <SiPhp  size={15} color="#6181B6" />
                    <p className="text-[10px] md:text-xs">PHP</p>
                  </div>
                </div>
                <p className="text-sm md:text-base">Frameworks</p>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <IoLogoVue size={15} color="#41B883" />
                    <p className="text-[10px] md:text-xs">Vue</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <FaLaravel  size={15} color="#FF2D20" />
                    <p className="text-[10px] md:text-xs">Laravel</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <SiExpo  size={15} />
                    <p className="text-[10px] md:text-xs">Expo</p>
                  </div>
                </div>
                <p className="text-sm md:text-base">Libraries</p>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <SiReact size={15} color="#00D8FF" />
                    <p className="text-[10px] md:text-xs">React</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <TbBrandReactNative  size={15} color="#00778C" />
                    <p className="text-[10px] md:text-xs">React Native</p>
                  </div>
                </div>
                <p className="text-sm md:text-base">Databases</p>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <GrMysql size={15} color="#00546B" />
                    <p className="text-[10px] md:text-xs">Mysql</p>
                  </div>
                  <div className="flex gap-2 items-center px-4 py-2 border border-[#274643] w-fit rounded-2xl">
                    <SiMongodb  size={15} color="#6CAC48" />
                    <p className="text-[10px] md:text-xs">MongoDB</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h4 className="font-bold text-lg md:text-xl text-[#3BCEC6] mb-2">Experience</h4>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm md:text-base">PT Balisolutionbiz</p>
                    <p className="font-semibold text-sm md:text-base">Fullstack Developer, Web, Mobile</p>
                    <p className="font-semibold text-white/60 text-xs md:text-sm">Fulltime • Jul 2023 - Present </p>
                  </div>

                  <p className="text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm md:text-base">PT Foxbyte Global Inovasi</p>
                    <p className="font-semibold text-sm md:text-base">Web Developer</p>
                    <p className="font-semibold text-white/60 text-xs md:text-sm">Intern • Aug 2022 - Oct 2022 </p>
                  </div>

                  <p className="text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm md:text-base">PT Foxbyte Global Inovasi</p>
                    <p className="font-semibold text-sm md:text-base">Web Developer</p>
                    <p className="font-semibold text-white/60 text-xs md:text-sm">Intern • Dec 2021 - Feb 2022 </p>
                  </div>

                  <p className="text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?</p>
                </div>
              </div>
            </section>

            <footer>
              <p className="text-center text-xs mt-5">©️ ngurahputuryansurianjana. All rights reserved</p>
            </footer>
        </main>
    );
}
