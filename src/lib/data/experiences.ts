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
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?",
    employmentType: "Fulltime",
    startDate: "Jul 2023",
    endDate: "Present",
  },
  {
    company: "PT Foxbyte Global Inovasi",
    position: "Web Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?",
    employmentType: "Intern",
    startDate: "Aug 2022",
    endDate: "Oct 2022",
  },
  {
    company: "PT Foxbyte Global Inovasi",
    position: "Web Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur ducimus deleniti expedita excepturi odit, nihil repellat doloribus possimus eligendi, vel architecto consequuntur temporibus? Dignissimos reprehenderit error cum obcaecati repudiandae, incidunt autem suscipit iste esse nemo exercitationem veniam eveniet inventore?",
    employmentType: "Intern",
    startDate: "Dec 2021",
    endDate: "Feb 2022",
  },
];

export default experiences;
