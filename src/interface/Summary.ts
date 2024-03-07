export interface Experience {
  position: string;
  period: string;
  company: string;
  content: string;
}

export interface Education {
  institution: string;
  period: string;
  received: string;
  faculty: string;
}

export interface Skills {
  title: string;
  tools: string[];
  workflow: string[];
}

export interface Interests {
  title: string;
  content: string[];
}

export interface Project {
  project: string;
  link: string;
  comit: string;
}

export interface Awards {
  title: string;
  expansion: string;
  content: string[];
}

export interface Social {
  linkedIn: string;
  github: string;
  telegram: string;
  youtube: string;
}
export interface FullName {
  name: string;
  surname: string;
}
export interface About {
  title: string;
  address: string;
  phone: string;
  mail: string;
  aboutMe: string;
}
interface CV {
  language: string;
  avatar: string;
  fullName: FullName;
  about: About;
  social: Social;

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
