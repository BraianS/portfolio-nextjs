// types/portfolio.d.ts
export interface Hero {
  firstName: string;
  lastName: string;
}

export interface About {
  location: string;
  birthDate: string; // or Date if you'll convert the string to Date object
  title: string;
  description: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
  other: string[];
}

export interface Projects {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface PortfolioData {
  hero: Hero;
  about: About;
  skills: Skills;
  projects: Projects[];
  contact: Contact;
}