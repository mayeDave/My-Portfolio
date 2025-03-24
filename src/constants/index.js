import {
    mobile,
    backend,
    creator,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    mayeAutos,
    techConnect,
    movie,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Deployment",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: "/tech/html.png",
    },
    {
      name: "CSS 3",
      icon: "/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "/tech/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "/tech/typescript.png",
    },
    {
      name: "React JS",
      icon: "/tech/reactjs.png",
    },
    {
      name: "Redux Toolkit",
      icon: "/tech/redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/tech/tailwind.png",
    },
    {
      name: "Node JS",
      icon: "/tech/nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "/tech/mongodb.png",
    },
    {
      name: "Three JS",
      icon: "/tech/threejs.svg",
    },
    {
      name: "Git",
      icon: "/tech/git.png",
    },
  ];
  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "David is an incredibly talented and dedicated full-stack developer. Anyone working with David is in great hands!",
      name: "Haji Monsur",
      designation: "CFO",
      company: "Acme Co",
      image: "https://res.cloudinary.com/darnsubew/image/upload/v1738170312/jvfhyi0c9njlxgdmuuiv.jpg",
    },
    {
      testimonial:
        "I had the pleasure of collaborating with David during our tech diploma program, and his problem-solving skills stood out. ",
      name: "Aderoyal",
      designation: "COO",
      company: "DEF Corp",
      image: "https://res.cloudinary.com/darnsubew/image/upload/v1738266388/yzawbndqrfwt5mr2nb6h.jpg",
    },
    {
      testimonial:
        "David’s expertise in full-stack development is exceptional. His ability to break down complex problems and find effective solutions was evident in every project we worked on",
      name: "Bamidele",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://res.cloudinary.com/darnsubew/image/upload/v1738234711/g4934ergqtrrlxp1xfqt.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Maye Autos",
      description:
        "A full-stack web application where users can seamlessly buy and sell cars. The platform ensures an intuitive user experience with a responsive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mayeAutos,
      source_code_link: "https://github.com/mayeDave/CarListing-FullStack.git",
      project_link: "https://carlisting-frontend-s5f8.onrender.com/",
    },
    {
      name: "Tech Connect",
      description:
        "Web-based Social Media Platform, that fosters a vibrant tech community where users can grow their skills, careers, and connections.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: techConnect,
      source_code_link: "https://github.com/mayeDave/TechConnect.git",
      project_link: "https://techconnect-1fnb.onrender.com/",
    },
    {
      name: "Movie App",
      description:
        "A fullstack movie application, where users can search for trending movies and get review of movies directly from a movie api (TMDB).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/mayeDave/movie-app.git",
      project_link: "https://movie-app-h8bw.onrender.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };