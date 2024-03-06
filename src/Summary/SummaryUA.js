import { awardsContent } from "./AwardsContent";
import { social } from "./Social";
import { tools } from "./Tools";
import { aboutContent } from "./aboutContent";
import avatar from "./avatar.webp";
import { projects } from "./linkProjects";

export const Resume = {
  language: "UA",
  about: {
    title: "Про мене",
    avatar,

    fullName: { name: "Василь ", surname: "Андрейчук" },
    address: "Україна · м. Хмельницький",
    phone: aboutContent.phone,
    mail: aboutContent.mail,
    aboutMe:
      "Я маю досвід використання гнучких фреймворків, щоб забезпечити надійний синопсис для ваємодії на високому рівні.",
    social: social,
  },

  experience: {
    title: "Досвід",
    content: [
      {
        position: "Продакт-Менеджер",
        period: "Липень 2015 - Червень 2016",
        company: "'Технопростір'",
        content:
          "На Delphi 6 (Object Pascal), створив парсер сайтів, який допомагав в актуальному реагуванні на зміну цін.",
      },
      {
        position: "Адміністратор системи",
        period: "Червень 2016 - Квітень 2018",
        company: "'SmartPhone'",
        content:
          "На даній посаді, окрім управління, також займався розробкою невеличких програмок на Delphi 7 (Object Pascal), і створення динамічно-кастомних звітів на FastReport.",
      },
      {
        position: "Регіональний директор",
        period: "Січень 2020",
        company: "'Siti Case'",
        content:
          "за допомогою Delphi 7 (Object Pascal), автоматизував синхронне закриття кас по Україні і виводом стандартизованих звітів.",
      },
      {
        position: "Scrum Master / Front-end Developer",
        period: "Грудень 2021",
        company: "'GoIt'",
        content:
          "Після навчання на Full-Stack Developer прийняв участь у розробці командного проєкту як розробник і як Scrum Master.",
      },
      {
        position: "Front-end Developer",
        period: "Грудень 2022 і до тепер",
        company: "'PRGRSS'",
        content: "Не штатний розробник додатків в компанії PRGRSS.",
      },
    ],
  },

  education: {
    title: "освіта",
    content: [
      {
        institution: "Хмельницький Інститут Розвитку Людини Україна",
        period: "Вересень 2007 - Червень 2011",
        received: "БАКАЛАВР НАУК",
        faculty: "0301 Соціально-політичні науки 6.030102 Психологія",
      },
      {
        institution: "GoIt Academy",
        period: "Грудень 2020 - Грудень 2022",
        received: "Full Stack Developer",
        faculty: "",
      },
    ],
  },

  skills: {
    title: "навички",
    Title: "МОВИ ПРОГРАМУВАННЯ ТА ІНСТРУМЕНТИ",
    tools: tools,
    workflow: [
      "Мобільний спочатку, адаптивний дизайн",
      "Кросбраузерне тестування та налагодження",
      "Міжфункціональні команди",
      "Гнучка розробка та Scrum",
      "Уся верстка на grid",
    ],
  },

  interests: {
    title: "інтереси",
    content: [
      "Захоплююсь електронікою, полюбляю до робляти електроніку, яка на мою думку в чомусь не дотягує щоб бути 10/10.",
      "Полюбляю програмувати мікроконтролери, і інтегрувати їх в побут.",
    ],
  },

  projects: {
    title: "Проєкти",
    content: [
      {
        project: "Тестове завдання 'Quick note'",
        link: projects["Quick note"].link,
        comit: projects["Quick note"].teg,
      },
      {
        project: "Кастомний модуль редактора коміксів",
        link: projects["ivision of book"].link,
        comit: projects["ivision of book"].teg,
      },
      {
        project:
          "Модуль тестування швидкостей між абонентами і мережею серверів",
        link: projects["test 2"].link,
        comit: projects["test 2"].teg,
      },
      {
        project: "Статичний інтернет магазин (single page application)",
        link: projects["simple shop react"].link,
        comit: projects["simple shop react"].teg,
      },
      {
        project: "Індивідуальний калькулятор калорій (single page application)",
        link: projects.calculator.link,
        comit: projects.calculator.teg,
      },
      {
        project: "Лендінг фірми 'Bullion Network' (single page application)",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
      {
        project: "Лендінг фірми 'Tlayen Web Builder'",
        link: projects["Bullion Network"].link,
        comit: projects["Bullion Network"].teg,
      },
    ],
  },
  awards: {
    title: "нагороди",
    expansion: "НАГОРОДИ ТА СЕРТИФІКАТИ",
    content: awardsContent,
  },
};

export default Resume;
