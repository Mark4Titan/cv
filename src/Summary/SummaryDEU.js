import { awardsContent } from "./AwardsContent";
import { social } from "./Social";
import { tools } from "./Tools";
import { aboutContent } from "./aboutContent";
import avatar from "./avatar.webp";
import { projects } from "./linkProjects";

export const Resume = {
  language: "DEU",
  fullName: { name: "Vasyl ", surname: "Andreychuk" },
  avatar,
  social: social,
  
  about: {
    title: "Über mich",

    address: "Ukraine · Chmelnyzkyj",
    phone: aboutContent.phone,
    mail: aboutContent.mail,
    aboutMe:
      "Ich habe Erfahrung in der Verwendung flexibler Frameworks, um eine robuste Synopse für Interaktionen auf hoher Ebene bereitzustellen.",
  },

  experience: {
    title: "Erfahrung",
    content: [
      {
        position: "Produktmanager",
        period: "Juli 2015 - Juni 2016",
        company: "'Technospace'",
        content:
          "Auf Delphi 6 (Object Pascal) habe ich einen Website-Parser erstellt, der bei der rechtzeitigen Reaktion auf Preisänderungen half.",
      },
      {
        position: "Systemadministrator",
        period: "Juni 2016 - April 2018",
        company: "'SmartPhone'",
        content:
          "In dieser Position war ich neben dem Management auch an der Entwicklung kleiner Programme auf Delphi 7 (Object Pascal) und der Erstellung dynamischer benutzerdefinierter Berichte auf FastReport beteiligt.",
      },
      {
        position: "Regionaldirektor",
        period: "Januar 2020",
        company: "'Siti Case'",
        content:
          "mit Hilfe von Delphi 7 (Object Pascal), das synchrone Schließen von Kassen in der Ukraine und die Ausgabe von standardisierten Reports automatisiert.",
      },
      {
        position: "Scrum Master / Frontend-Entwickler",
        period: "Dezember 2021",
        company: "'GoIt'",
        content:
          "Nach der Ausbildung zum Full Stack Developer trat ich als Entwickler und Scrum Master in die Projektentwicklung bei.",
      },
      {
        position: "Front-end Developer",
        period: "Dezember 2022 und bis jetzt",
        company: "'PRGRSS'",
        content: "Anwendungsentwickler in Teilzeit bei der Firma PRGRSS.",
      },
    ],
  },
  education: {
    title: "Bildung",
    content: [
      // { institution: "", period: "", received: "", faculty: "", GPA: "" },
      {
        institution: "Khmelnytskyi Institute of Human Development Ukraine",
        period: "September 2007 - Juni 2011",
        received: "BACHELOR DER WISSENSCHAFTEN",
        faculty: "0301 Sozial- und Politikwissenschaften 6.030102 Psychologie",
      },
      {
        institution: "GoIt Academy",
        period: "Dezember 2020 - Dezember 2022",
        received: "Full Stack Developer",
        faculty: "",
      },
    ],
  },
  skills: {
    title: "Kompetenzen",
    Title: "PROGRAMMIERSPRACHEN UND TOOLS",
    tools: tools,
    workflow: [
      "Mobile First, Responsive Design",
      "Browserübergreifendes Testen und Debuggen",
      "Funktionsübergreifende Teams",
      "Agile Entwicklung und Scrum",
      "Das gesamte Layout befindet sich auf einem Raster",
    ],
  },

  interests: {
    title: "Interessen",

    content: [
      "Ich habe eine Leidenschaft für Elektronik und repariere gerne Elektronik, die meiner Meinung nach in gewisser Weise nicht perfekt ist, um 10/10 zu sein.",
      "Meine andere Leidenschaft ist das Programmieren von Mikrocontrollern und deren Integration in den Alltag.",
    ],
  },

  projects: {
    title: "Projekte",
    content: [
      {
        project: "Testaufgabe 'Quick note'",
        link: projects["Quick note"].link,
        comit: projects["Quick note"].teg,
      },
      {
        project: "Benutzerdefiniertes Comic-Editor-Modul",
        link: projects["ivision of book"].link,
        comit: projects["ivision of book"].teg,
      },
      {
        project:
          "Geschwindigkeitstestmodul zwischen Abonnenten und dem Servernetzwerk",
        link: projects["test 2"].link,
        comit: projects["test 2"].teg,
      },
      {
        project: "Statischer Online-Shop (single page application)",
        link: projects["simple shop react"].link,
        comit: projects["simple shop react"].teg,
      },
      {
        project: "Individueller Kalorienrechner (single page application)",
        link: projects.calculator.link,
        comit: projects.calculator.teg,
      },
      {
        project:
          "Landungsunternehmen 'Bullion Network' (single page application)",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
      {
        project: "Landungsunternehmen 'Tlayen Web Builder'",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
    ],
  },
  awards: {
    title: "Auszeich.",
    expansion: "AUSZEICHNUNGEN UND ZERTIFIKATE",

    content: awardsContent,
  },
};

export default Resume;
