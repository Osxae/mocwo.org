export type MediaItem = {
  type: "image" | "video";
  src: string;
};

export type School = {
  id: string;
  name: string;
  description: string;
  report: string;
  media: MediaItem[];
};

export const schools: School[] = [
  {
    id: "opoku",
    name: "Opoku Ware Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      During our outreach at Opoku Ware Senior High School, 
      more than 1200 students gathered for a time of worship, 
      mentorship, and career guidance. 
      Many students expressed renewed hope for their future 
      and showed interest in STEM programs. 
      Teachers also noted a visible impact on discipline and motivation.
    `,
    media: [
      { type: "image", src: "/media/opoku/photo1.jpg" },
      { type: "image", src: "/media/opoku/photo2.jpg" },
      { type: "video", src: "https://www.youtube.com/watch?v=GUrlXQd132w&pp=ygUYcmV2IHByaW5jZSBiZWRpYWtvIGFwcGF1" },
    ],
  },
  {
    id: "prempeh",
    name: "Prempeh Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      At Prempeh Senior High School, over 1850 students participated 
      in sessions that combined spiritual renewal and academic mentorship. 
      The program emphasized leadership, excellence, and responsibility. 
      Feedback from students showed a deep sense of encouragement 
      and commitment to their studies.
    `,
    media: [
      { type: "image", src: "/media/prempeh/photo1.jpg" },
      { type: "video", src: "https://www.youtube.com/watch?v=GUrlXQd132w&pp=ygUYcmV2IHByaW5jZSBiZWRpYWtvIGFwcGF1" },
      { type: "video", src: "https://www.youtube.com/watch?v=GUrlXQd132w&pp=ygUYcmV2IHByaW5jZSBiZWRpYWtvIGFwcGF1" },
      { type: "video", src: "https://www.youtube.com/watch?v=GUrlXQd132w&pp=ygUYcmV2IHByaW5jZSBiZWRpYWtvIGFwcGF1" },
      { type: "video", src: "https://www.youtube.com/watch?v=GUrlXQd132w&pp=ygUYcmV2IHByaW5jZSBiZWRpYWtvIGFwcGF1" },
    ],
  },
  {
    id: "stlouis",
    name: "St. Louis Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      Our team engaged with 1600 students at St. Louis Senior High School. 
      The outreach focused on character building, academic discipline, 
      and spiritual growth. 
      Teachers reported that the sessions boosted morale 
      and inspired students to embrace both faith and education.
    `,
    media: [
      { type: "image", src: "/media/stlouis/photo1.jpg" },
      { type: "image", src: "/media/stlouis/photo2.jpg" },
    ],
  },
  {
    id: "wesleygirls",
    name: "Kumasi Wesley Girls Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      At Kumasi Wesley Girls, we met over 2400 students 
      in an atmosphere filled with worship and impactful teaching. 
      Many young women were inspired to pursue careers in STEM fields 
      while holding firm to Christian values. 
      Staff testified that the program left a lasting impression.
    `,
    media: [
      { type: "image", src: "/media/wesleygirls/photo1.jpg" },
      { type: "video", src: "/media/wesleygirls/video1.mp4" },
    ],
  },
  {
    id: "kumasacademy",
    name: "Kumasi Academy Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      Kumasi Academy welcomed us warmly with 1600 students present. 
      The focus was on personal discipline, teamwork, and spiritual growth. 
      Several students shared testimonies of how the sessions 
      encouraged them to develop both academically and spiritually.
    `,
    media: [
      { type: "image", src: "/media/kumasacademy/photo1.jpg" },
    ],
  },
  {
    id: "presec",
    name: "Presbyterian Boys Senior High School (PRESEC)",
    description: "A wonderful experience and time in the presence of God",
    report: `
      Our outreach at PRESEC, with more than 3400 students, 
      was one of the largest. 
      We held multiple sessions on leadership, faith, and science, 
      motivating students to aim high in academics 
      while staying rooted in Christian values. 
      The impact was evident in the lively participation and feedback.
    `,
    media: [
      { type: "image", src: "/media/presec/photo1.jpg" },
      { type: "video", src: "/media/presec/video1.mp4" },
    ],
  },
  {
    id: "serwaa",
    name: "Serwaa Nyarko Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      Serwaa Nyarko SHS, with 1800 students, experienced a powerful time 
      of worship and mentorship. 
      The sessions emphasized character development and resilience. 
      Students left motivated to pursue excellence 
      and to impact their communities positively.
    `,
    media: [
      { type: "image", src: "/media/serwaa/photo1.jpg" },
    ],
  },
  {
    id: "armedforces",
    name: "Armed Forces Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      At Armed Forces SHS, over 1800 students participated 
      in an outreach program that focused on discipline, faith, 
      and leadership. 
      The school environment was energized, and many students 
      pledged to take their education and spiritual lives more seriously.
    `,
    media: [
      { type: "image", src: "/media/armedforces/photo1.jpg" },
      { type: "video", src: "/media/armedforces/video1.mp4" },
    ],
  },
  {
    id: "mfantsipim",
    name: "Mfantsipim Senior High School",
    description: "A wonderful experience and time in the presence of God",
    report: `
      At Mfantsipim SHS, nearly 1900 students attended our sessions. 
      The program combined mentorship, worship, and career guidance. 
      Students were inspired to excel in STEM fields 
      and to lead lives of integrity. 
      The outreach strengthened our relationship with the school community.
    `,
    media: [
      { type: "image", src: "/media/mfantsipim/photo1.jpg" },
      { type: "image", src: "/media/mfantsipim/photo2.jpg" },
    ],
  },
  // Generic media collections for site-wide media pages
  {
    id: "sunday-service",
    name: "Sunday Service Highlights",
    description: "Highlights from our Sunday services — worship, sermons, and testimonies.",
    report: "",
    media: [
      { type: "image", src: "/media/sunday/thumb1.jpg" },
      { type: "image", src: "/media/sunday/thumb2.jpg" },
      { type: "image", src: "/media/sunday/thumb3.jpg" },
      { type: "image", src: "/media/sunday/thumb4.jpg" },
      { type: "image", src: "/media/sunday/thumb5.jpg" },
      { type: "image", src: "/media/sunday/thumb6.jpg" },
      { type: "image", src: "/media/sunday/thumb7.jpg" },
      { type: "image", src: "/media/sunday/thumb8.jpg" },
      { type: "image", src: "/media/sunday/thumb9.jpg" },
      { type: "image", src: "/media/sunday/thumb10.jpg" },
    ],
  },
  {
    id: "watch-night",
    name: "Watch Night Highlights",
    description: "Powerful moments from our watch night services.",
    report: "",
    media: [
      { type: "image", src: "/media/watchnight/thumb1.jpg" },
      { type: "image", src: "/media/watchnight/thumb2.jpg" },
      { type: "image", src: "/media/watchnight/thumb3.jpg" },
      { type: "image", src: "/media/watchnight/thumb4.jpg" },
      { type: "image", src: "/media/watchnight/thumb5.jpg" },
      { type: "image", src: "/media/watchnight/thumb6.jpg" },
      { type: "image", src: "/media/watchnight/thumb7.jpg" },
      { type: "image", src: "/media/watchnight/thumb8.jpg" },
      { type: "image", src: "/media/watchnight/thumb9.jpg" },
      { type: "image", src: "/media/watchnight/thumb10.jpg" },
    ],
  },
  {
    id: "atwea-camps",
    name: "Atwea Camps",
    description: "Images and videos from our Atwea camps and outreach programs.",
    report: "",
    media: [
      { type: "image", src: "/media/atwea/thumb1.jpg" },
      { type: "image", src: "/media/atwea/thumb2.jpg" },
      { type: "image", src: "/media/atwea/thumb3.jpg" },
      { type: "image", src: "/media/atwea/thumb4.jpg" },
      { type: "image", src: "/media/atwea/thumb5.jpg" },
      { type: "image", src: "/media/atwea/thumb6.jpg" },
      { type: "image", src: "/media/atwea/thumb7.jpg" },
      { type: "image", src: "/media/atwea/thumb8.jpg" },
      { type: "image", src: "/media/atwea/thumb9.jpg" },
      { type: "image", src: "/media/atwea/thumb10.jpg" },
    ],
  },
  {
    id: "others",
    name: "Other Media",
    description: "Additional photos and videos from various events and programs.",
    report: "",
    media: [
      { type: "image", src: "/media/others/thumb1.jpg" },
      { type: "image", src: "/media/others/thumb2.jpg" },
      { type: "image", src: "/media/others/thumb3.jpg" },
      { type: "image", src: "/media/others/thumb4.jpg" },
      { type: "image", src: "/media/others/thumb5.jpg" },
      { type: "image", src: "/media/others/thumb6.jpg" },
      { type: "image", src: "/media/others/thumb7.jpg" },
      { type: "image", src: "/media/others/thumb8.jpg" },
      { type: "image", src: "/media/others/thumb9.jpg" },
      { type: "image", src: "/media/others/thumb10.jpg" },
    ],
  },
];
