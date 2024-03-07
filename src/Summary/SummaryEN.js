import { awardsContent } from "./AwardsContent";
import { social } from "./Social";
import { tools } from "./Tools";
import { aboutContent } from "./aboutContent";
import avatar from "./avatar2.webp";
import { projects } from "./linkProjects";

export const Resume = {
  language: "EN",
  fullName: { name: "Vasyl ", surname: "Andreychuk" },
  avatar,
  social: social,
  
  about: {
    title: "about",
    address: "Ukraine · Khmelnytskyi",
    phone: aboutContent.phone,
    mail: aboutContent.mail,
    aboutMe:
      "I have experience of using flexible frameworks to provide a robust synopsis for high-level interactions.",
  },

  experience: {
    title: "experience",
    content: [
      {
        position: "Product Manager",
        period: "July 2015 - June 2016",
        company: "'Technospace'",
        content:
          "On Delphi 6 (Object Pascal), I created a site parser that helped in timely response to price changes.",
      },
      {
        position: "System administrator",
        period: "June 2016 - April 2018",
        company: "'SmartPhone'",
        content:
          "In this position, in addition to management, I was also involved in the development of small programs on Delphi 7 (Object Pascal) and the creation of dynamic custom reports on FastReport.",
      },
      {
        position: "Regional director",
        period: "January 2020",
        company: "'Siti Case'",
        content:
          "with the help of Delphi 7 (Object Pascal), automated the synchronous closing of cash registers in Ukraine and the output of standardized reports.",
      },
      {
        position: "Scrum Master / Front-end Developer",
        period: "December 2021",
        company: "'GoIt'",
        content:
          "After training as a Full Stack Developer, I joined the team as a developer and a Scrum Master on the project development.",
      },
      {
        position: "Front-end Developer",
        period: "December 2022 and until now",
        company: "'PRGRSS'",
        content: "Part-time application developer at PRGRSS company.",
      },
    ],
  },

  education: {
    title: "education",
    content: [
      {
        institution: "Khmelnytskyi Institute of Human Development Ukraine",
        period: "September 2007 - June 2011",
        received: "BACHELOR OF SCIENCES",
        faculty: "0301 Social and political sciences 6.030102 Psychology",
      },
      {
        institution: "GoIt Academy",
        period: "December 2020 - December 2022",
        received: "Full Stack Developer",
        faculty: "",
      },
    ],
  },

  skills: {
    title: "skills",
    Title: "PROGRAMMING LANGUAGES & TOOLS",
    tools,
    workflow: [
      "Mobile first, responsive design",
      "Cross-Browser Testing and Debugging",
      "Cross-functional teams",
      "Agile Development and Scrum",
      "The entire layout is on a grid",
    ],
  },

  interests: {
    title: "interests",
    content: [
      "I am passionate about electronics and I like to fix electronics, which are not perfect in some ways to be 10/10, in my opinion.",
      "My other passion is programming microcontrollers and integrating them into everyday life.",
    ],
  },
  projects: {
    title: "Projects",
    content: [
      {
        project: "Test task 'Quick note'",
        link: projects["Quick note"].link,
        comit: projects["Quick note"].teg,
      },
      {
        project: "Custom comic editor module",
        link: projects["ivision of book"].link,
        comit: projects["ivision of book"].teg,
      },
      {
        project:
          "Speed ​​testing module between subscribers and the server network",
        link: projects["test 2"].link,
        comit: projects["test 2"].teg,
      },
      {
        project: "Static online store (single page application)",
        link: projects["simple shop react"].link,
        comit: projects["simple shop react"].teg,
      },
      {
        project: "Individual calorie calculator (single page application)",
        link: projects.calculator.link,
        comit: projects.calculator.teg,
      },
      {
        project: "Landing company 'Bullion Network' (single page application)",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
      {
        project: "Landing company 'Tlayen Web Builder'",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
    ],
  },
  awards: {
    title: "awards",
    expansion: "AWARDS & CERTIFICATIONS",
    content: awardsContent,
  },
};

export default Resume;
