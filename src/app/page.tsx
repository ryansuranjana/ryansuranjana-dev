import Header from "@/components/partials/Header";
import Image from "next/image";
import ProfileImg from "@/assets/img/me.jpeg";
import { IoLogoInstagram, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/ui/Section";
import SectionList from "@/components/ui/SectionList";
import skills from "@/lib/data/skills";
import BadgeSkill from "@/components/ui/BadgeSkill";
import experiences from "@/lib/data/experiences";
import Experience from "@/components/ui/Experience";
import ProjectList from "@/components/partials/ProjectList";
import ProjectListSkeleton from "@/components/ui/ProjectListSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full md:w-[60%] md:px-0 px-5 mx-auto animate-bounce-back-from-bottom">
        <Section>
          <div className="mt-12 flex flex-col gap-4">
            <Image
              src={ProfileImg}
              alt="ryansuranjana-img"
              width={150}
              height={150}
              className="rounded-full"
            />
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
              <a
                href="http://www.linkedin.com/in/ryan-suranjana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin size={40} color="#3BCEC6" />
              </a>
            </div>
          </div>
          <div className="my-10">
            <p className="pb-5">
              Hi there! I'm Ryan, a software developer. I started my tech
              journey in 2021 and have been loving every minute of it. I enjoy
              learning new technologies and am always excited about the next big
              thing in tech. This journey has been an amazing ride, and I'm
              passionate about creating cool and innovative solutions along the
              way.
            </p>

            <p>
              At first, coding was just a hobby, but now it's part of my daily
              routine. Sure, sometimes it gets a bit boring, so I mix things up
              by watching movies, hitting the gym, and playing games. I'm also
              into learning new things, like playing football and figuring out
              cool tactics. It's all about keeping things interesting and having
              fun along the way!
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SectionList>
            {skills.map((skill, i) => (
              <div key={i}>
                <p className="text-sm md:text-base mb-2">{skill.nameGroup}</p>
                <div className="flex gap-2">
                  {skill.skills.map((skill) => (
                    <BadgeSkill icon={skill.icon} name={skill.name} key={i} />
                  ))}
                </div>
              </div>
            ))}
          </SectionList>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <SectionList>
            {experiences.map((experience, i) => (
              <Experience {...experience} key={i} />
            ))}
          </SectionList>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>

          <Suspense fallback={<ProjectListSkeleton />}>
            <ProjectList />
          </Suspense>
        </Section>
      </main>

      <footer className="pb-2">
        <p className="text-center text-xs mt-5">
          ©️ ngurahputuryansurianjana. All rights reserved
        </p>
      </footer>
    </>
  );
}
