export enum Language {
  FR = "fr",
  EN = "en",
}

export interface Translations {
  common: {
    home: string
    contact: string;
    works: string;
    services: string;
    readMore: string;
    close: string;
    send: string;
    all: string;
  };
  nav: {
    works: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    contactBtn: string;
    worksBtn: string;
  };
  works: {
    title: string;
    subtitle: string;
    description: string;
    filterTitle: string;
    projectsCount: string;
    clientsCount: string;
    yearsCount: string;
    projectsLabel: string;
    clientsLabel: string;
    yearsLabel: string;
    categories: {
      all: string;
      webDesign: string;
      branding: string;
      marketing: string;
      content: string;
    };
    projectDetails: {
      description: string;
      services: string;
      category: string;
      year: string;
      challenge: string;
      solution: string;
      discussProject: string;
    };
  };
  services: {
    title: string;
    website: string;
    uxui: string;
    seo: string;
    mobile: string;
    items: {
      [key: string]: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    ourProjects: string;
    projects: {
      [key: string]: {
        description: string;
        challenge: string;
        solution: string;
      };
    };
  };
  methodology: {
    sectionTitle: string;
    sectionSubtitle: string;
    title: string;
    steps: {
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
      step5Title: string;
      step5Desc: string;
      step6Title: string;
      step6Desc: string;
    };
  };
  technology: {
    title: string;
  };
  footer: {
    title: string;
    contactBtn: string;
    copyright: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    sendBtn: string;
    joinUs: string;
    validation: {
      nameMin: string;
      nameMax: string;
      emailInvalid: string;
      emailRequired: string;
      messageMin: string;
      messageMax: string;
    };
  };
  aboutUs: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    stats: {
      projects: string;
      clients: string;
      years: string;
      satisfaction: string;
    };
    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    values: {
      title: string;
      innovation: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      collaboration: {
        title: string;
        description: string;
      };
      passion: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      founder: string;
      leadDesigner: string;
      developer: string;
      marketing: string;
    };
    mission: {
      title: string;
      description: string;
    };
  };
}
