import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bdw,
    aqb,
    bug,
    threejs,
    github1,
    tensorflow,
    android,
    analyst,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: html,
    },
    {
      title: "Android app Developer",
      icon: android,
    },
    {
      title: "UI/UX Designer",
      icon: figma,
    },
    {
      title: "Data analyst",
      icon: analyst,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: github1,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "",
       points: [
      //   // "Made several websites and real time projects",
      //   // "M",
      //   // "Implementing responsive design and ensuring cross-browser compatibility.",
      //   // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android App Developer",
      company_name: "",
      icon: android,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: html,
      iconBg: "#383E56",
      date: "",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Blood Donation Website",
      description:
        "A management platform where the donors can donate and recieve bloods in case of emergency",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: bdw,
      source_code_link: "https://github.com/shiba196/Blood-Donation-website",
    },
    {
      name: "Bug Detection",
      description:
        "Detects bugs present in crops",
      tags: [
        {
          name: "Data Science",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "Cascade-Classifier",
          color: "pink-text-gradient",
        },
      ],
      image: bug,
      source_code_link: "https://github.com/shiba196/Bug-Detection",
    },
    {
      name: "Any question answer website",
      description:
        "A look alike ChatGPT which approximately answers all questions",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: aqb,
      source_code_link: "https://github.com/shiba196/any-question-answer-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };