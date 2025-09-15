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
      title: "First Hackathon",
      date: "October 2021",
      description: "Won the 'Best Innovative Idea' award at the Smart India Hackathon 2021 for creating a solution for waste management.",
      photos: [
        "portfolio_ui/Achievements.jpg",
        "portfolio_ui/DevSphere - Home Page.jpg",
        "portfolio_ui/Experience.jpg"
      ]
    },
    {
      title: "Trip to the Mountains",
      date: "July 2022",
      description: "A memorable trip to the Himalayas with friends. We trekked to the Kedarkantha peak and witnessed breathtaking views.",
      photos: [
        "portfolio_ui/Home.jpg",
        "portfolio_ui/Moments.jpg",
        "portfolio_ui/Projects.jpg"
      ]
    },
    {
      title: "Graduation Day",
      date: "May 2023",
      description: "Officially graduated with a Bachelor's degree in Computer Science and Engineering. A proud moment for me and my family.",
      photos: [
        "assets/profile.jpg"
      ]
    }
  ],
  achievements: {
    certifications:[
{
title: "Certified AWS Solutions Architect – Associate",
      issued: "Amazon Web Services (AWS) – JUNE 2023",
      pics: ['assets/profile.jpg','assets/profile.jpg','assets/profile.jpg','assets/profile.jpg','assets/profile.jpg',],
      description: "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS."
    }
    ],
    awards:[
    {
title: "Certified AWS Solutions Architect – Associate",
      issued: "Amazon Web Services (AWS) – JUNE 2023",
      pics: ['assets/profile.jpg','assets/arrow.svg','assets/email.svg','assets/github.svg','assets/logo.png',],
      description: "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS."
    },
    ],
    courses:[
    {
title: "Certified AWS Solutions Architect – Associate",
      issued: "Amazon Web Services (AWS) – JUNE 2023",
      pics: ['assets/profile.jpg','assets/profile.jpg','assets/profile.jpg','assets/profile.jpg','assets/profile.jpg',],
      description: "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS."
    }
    ]
  }
};
