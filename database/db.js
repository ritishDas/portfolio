const db = {
skills: {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "TailwindCSS",
    "Redux / Zustand",
    "Webpack / Vite",
    "Responsive Design",
    "Accessibility (a11y)"
  ],

  backend: [
    "Node.js",
    "Express",
    "NestJS",
    "GraphQL",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Redis",
    "Prisma / Sequelize / TypeORM",
    "Authentication (JWT, OAuth)",
    "Microservices",
    "WebSockets"
  ],

  devops: [
    "Linux / Bash",
    "Git & GitHub / GitLab",
    "CI/CD (GitHub Actions)",
    "Docker",
    "Kubernetes",
    "Nginx",
    "AWS (EC2, S3, RDS, Lambda)",
    "Azure",
    "Google Cloud Platform (GCP)",
  ],

  testing: [
    "Jest",
    "Mocha / Chai",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "Postman / Newman"
  ],

  others: [
    "Agile / Scrum",
    "System Design",
    "Design Patterns",
    "Problem Solving / DSA",
    "API Documentation (Swagger, OpenAPI)",
    "Security Best Practices (OWASP)"
  ]
},
  featured:[
    {
      title: "Ritish Das Portfolio",
      img: "assets/portfolio.jpg",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      link: "https://github.com/ritishDas/portfolio"
    },
    {
      title: "Gardener",
      img: "assets/gardener.jpg",
      description: "A json based dom generator, uses recursion to generate a full dom tree of elements along with its styles and attributes, can be used in small projects where react is overkill.",
      link: "https://github.com/ritishDas/gardener"
    }
  ],
experience: {
  professional: [],
  club: [
    {
      company: "Picsel KDKCE",
      role: "Website Head",
      duration: "July 2025 – Present",
      address: "Nagpur, India",
      details: [
        "Leading our website team along with other leaders.",
"Our team is responsible for the picsel website."
      ]
    },
    {
      company: "Picsel KDKCE",
      role: "Website Assistant",
      duration: "Aug 2024 - April 2025",
      address: "Nagpur",
      details: [
       "Was part of the main Website team",
"Played active role in backend and deployment."
      ]
    },
    {
      company: "Coding Club KDKCE",
      role: "Joint Technical Head",
      duration: "Aug 2024 – April 2025",
      address: "Nagpur",
      details: [
        "Conducted many events with our team with 300+ participants",
        "Organized inter-college programming contests and hackathons.",
        "Helped peers improve problem-solving and competitive programming skills."
      ]
    },
    {
      company: "BIS Club KDKCE",
      role: "Joint Technical Head",
      duration: "Feb 2024 - April 2025",
      address: "Nagpur, India",
      details: [
        "Contributed to setting up BIS events.",
      ]
    }
  ]
},
projects: [
  {
    title: "Ritish Das Portfolio",
    img: "assets/profile.jpg",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience. Built with responsive design.",
    link: "https://ritish.site",
    github: "https://github.com/ritishDas/portfolio",
    tech: ["HTML", "CSS", "JS", "gardener (my library)"]
  },
  {
    title: "Gardener",
    img: "assets/gardener.jpg",
    description:"A json based dom generator, uses recursion to generate a full dom tree of elements along with its styles and attributes, can be used in small projects where react is overkill.",
    link: "",
    github: "https://github.com/ritishDas/gardener",
    tech: ["JS"]
  },
],
moments: [
    {
      title: "End Of Third Year ",
      date: "April 2025",
      description: "This year was a blast took part in a lot of activities and learned a lot",
      photos: [
        "assets/moments/badges.jpg",
      ]
    },
    {
      title: "Nirvana 2025",
      date: "January 2025",
      description: "Our Annual College Event.",
      photos: [
        "assets/moments/nirvana.jpg",
      ]
    },
    {
      title: "Hack On, Government CE, Nagpur",
      date: "January 2025",
      description: "Participated in Hack On 8 hour hackathon in Government CE, Nagpur",
      photos: [
        "assets/moments/gce.jpg",
      ]
    },
     {
      title: "Central India Hackathon, Suryodaya CE, Nagpur",
      date: "January 2025",
      description: "Participated in the Central India 12 hr Hackathon in Suryodaya CE, though we didn't win but we learned a lot and enjoyed our first hackathon.",
      photos: [
        "assets/moments/cih.jpg",
      ]
    }
    
  ],
  achievements: {
    certifications:[ ],
    awards:[
    {
title: "1st prize in Code Combat",
      issued: "GH Raisoni Institute Of Engineering, Nagpur - 2024", 
      pics: ['assets/moments/codecombat.jpg'],
      description: "This was a problem solving competition in which we were given some tasks and problems to solve. We were given an hour to code in our preferred language and results were declared on the basis of speed, accuracy and code quality."
    },
     {
title: "1st prize in Techsphere",
      issued: "KDK College Of Engineering- 2024", 
      pics: ['assets/certs/Techsphere.jpg'],
      description: "This was a three round competition 1st was a technical quiz, second was code debugging, and the last round was a technical interview."
    },
    {
title: "3rd prize in Spark 2025",
      issued: "KDK College Of Engineering - 2025", 
      pics: ['assets/certs/spark25.jpg'],
      description: "This is a paper presentation competition in which our group presented a paper on title AI powered Collegiate Interactive Support System."
    },
    {
    title: "2nd prize in CodeFiesta",
      issued: "KDK College Of Engineering - 2023", 
      pics: ['assets/certs/CodeFiesta.jpg'],
      description: "This was a 3 round competition. 1st round was a quiz, 2nd was pseudocode round, 3rd was a problem solving round in which we were given a problem to solve. We were given limited time to code in our preferred language and results were declared on the basis of speed, accuracy and code quality. "
    },
      {
    title: "3rd prize in Spectra",
      issued: "KDK College Of Engineering - 2023", 
      pics: ['assets/certs/spectra.jpg'],
      description: "This was a debugging Competition in which we were given some code snippets and we need to debug it in limited time."
    },
    ],
    courses:[   ]
  }
};
