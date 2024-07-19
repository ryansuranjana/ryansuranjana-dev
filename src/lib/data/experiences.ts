export type Experience = {
  company: string;
  position: string;
  description: string;
  employmentType: string;
  startDate: string;
  endDate?: string | null;
};

const experiences: Experience[] = [
  {
    company: "PT Balisolutionbiz",
    position: "Fullstack Developer, Web, Mobile",
    description:
      "I'm here to build robust web applications using JavaScript and PHP, aiming to become a proficient fullstack developer. Managing projects such as POS systems, I focus on creating efficient systems and collaborating with multiple teams. I also mentor interns, sharing my experiences with them.",
    employmentType: "Fulltime",
    startDate: "Jul 2023",
    endDate: "Present",
  },
  {
    company: "PT Foxbyte Global Inovasi",
    position: "Web Developer",
    description:
      "During this period, I've been mastering the proper flow of application development, collaborating effectively with teams, leveraging Git, and optimizing applications for seamless user experiences and interfaces. Additionally, I've been refining coding practices to ensure exceptional quality.",
    employmentType: "Intern",
    startDate: "Aug 2022",
    endDate: "Oct 2022",
  },
  {
    company: "PT Foxbyte Global Inovasi",
    position: "Web Developer",
    description:
      "I am exploring various technologies, delving into Laravel and PHP to craft web applications, while embracing the art of coding and learning best practices in Laravel.",
    employmentType: "Intern",
    startDate: "Dec 2021",
    endDate: "Feb 2022",
  },
];

export default experiences;
