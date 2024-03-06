
interface Experience {
  position: string;
  period: string;
  company: string;
  content: string;
}

interface Education {
  institution: string;
  period: string;
  received: string;
  faculty: string;
}

interface Skills {
  title: string;
  tools: string[];
  workflow: string[];
}

interface Interests {
  title: string;
  content: string[];
}

interface Project {
  project: string;
  link: string;
  comit: string;
}

interface Awards {
  title: string;
  expansion: string;
  content: string[];
}

interface Social {
  linkedIn: string;
  github: string;
  telegram: string;
  youtube: string;
}

interface CV {
  language: string;
  about: {
    title: string;
    fullName: { name: string; surname: string };
    address: string;
    phone: string;
    mail: string;
    aboutMe: string;
    social: Social;
  };
  experience: {
    title: string;
    content: Experience[];
  };
  education: {
    title: string;
    content: Education[];
  };
  skills: Skills;
  interests: Interests;
  projects: {
    title: string;
    content: Project[];
  };
  awards: Awards;
}

export default CV;
