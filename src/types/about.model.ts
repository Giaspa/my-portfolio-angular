export type About = {
  a_who: string[],
  b_when: string[],
  c_so: string[],
  d_learn: string[],
  e_and: string[],
}

export type AboutSection = {
  id: number,
  sectionKey: string,
  text: string,
  order: number
}

export const MOCK_ABOUT: About = {
  a_who: [
    "Hello there! I'm Gianluca, nice to meet you!",
    "I'm a fullstack developer with a strong passion for front-end and a deep love for TypeScript."
  ],
  b_when: [
    "My journey into the world of technology started with a simple curiosity about how websites worked, but quickly turned into a career fuelled by passion and innovation."
  ],
  c_so: [
    "Over the years, I have honed my skills at building scalable and intuitive applications that solve real problems and improve everyday life."
  ],
  d_learn: [
    "What excites me most about development is the endless potential for growth.",
    "I enjoy keeping up with the latest technologies, constantly refining my skills and exploring new approaches to software design.",
    "For me, every project is an opportunity to learn and add value."
  ],
  e_and: [
    "When I'm not writing code for work, you're likely to find me reading up on the latest IT trends, prototyping new ideas or finding creative solutions to complex challenges.",
    "I am a firm believer in the power of collaboration and am always looking for ways to share knowledge and grow with my colleagues."
  ],
}

export function transformAboutSectionsToAbout(sections: AboutSection[]): About {
  const about: About = {
    a_who: [],
    b_when: [],
    c_so: [],
    d_learn: [],
    e_and: [],
  };

  // Raggruppa per sectionKey e ordina per order all'interno di ogni gruppo
  const grouped = sections.reduce((acc, section) => {
    if (!acc[section.sectionKey]) {
      acc[section.sectionKey] = [];
    }
    acc[section.sectionKey].push(section);
    return acc;
  }, {} as Record<string, AboutSection[]>);

  // Ordina ogni gruppo per order e popola l'oggetto About
  Object.keys(grouped).forEach(sectionKey => {
    const key = sectionKey as keyof About;
    if (about[key]) {
      grouped[sectionKey]
        .sort((a, b) => a.order - b.order)
        .forEach(section => {
          about[key].push(section.text);
        });
    }
  });

  return about;
}
