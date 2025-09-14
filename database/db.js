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
    "Bootstrap",
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
    "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
    "Docker",
    "Kubernetes",
    "Nginx",
    "AWS (EC2, S3, RDS, Lambda)",
    "Azure",
    "Google Cloud Platform (GCP)",
    "Terraform",
    "Monitoring (Prometheus, Grafana)"
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
      title: "E-Commerce Platform",
      img: "assets/profile.jpg",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      link: "ecom"
    },
    {
      title: "E-Commerce Platform",
      img: "assets/profile.jpg",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      link: "ecom"
    },
    {
      title: "E-Commerce Platform",
      img: "assets/profile.jpg",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      link: "ecom"
    },
  ],
experience: {
  professional: [
    {
      company: "Tech Solutions Inc.",
      role: "Full Stack Developer",
      duration: "Jan 2020 – Present",
      address: "Nagpur, India",
      details: [
        "Designed and implemented scalable web applications using React.js, Node.js, and Express.",
        "Developed RESTful APIs and integrated third-party services to improve platform functionality.",
        "Optimized SQL and NoSQL database queries (PostgreSQL, MongoDB) reducing response times by 30%.",
        "Led migration from monolithic architecture to microservices, improving deployment cycles.",
        "Mentored junior developers and conducted code reviews to maintain best practices."
      ]
    },
    {
      company: "InnovaTech Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Jun 2017 – Dec 2019",
      address: "Pune, India",
      details: [
        "Built interactive front-end components using Angular and integrated with backend APIs.",
        "Automated CI/CD pipelines with Jenkins and Docker, reducing manual deployment effort.",
        "Implemented JWT-based authentication and role-based access control for security.",
        "Collaborated with product managers and UI/UX team to deliver customer-centric solutions.",
        "Improved application performance by implementing server-side caching strategies."
      ]
    },
    {
      company: "WebWorks Ltd.",
      role: "Junior Full Stack Developer",
      duration: "Jan 2016 – May 2017",
      address: "Bangalore, India",
      details: [
        "Assisted in building e-commerce platforms using PHP (Laravel) and MySQL.",
        "Implemented responsive front-end designs with HTML5, CSS3, and jQuery.",
        "Developed unit tests to improve code reliability and reduce production bugs.",
        "Worked closely with senior engineers to debug and maintain legacy systems."
      ]
    },
    {
      company: "NextGen IT Services",
      role: "Intern – Web Developer",
      duration: "Jun 2015 – Dec 2015",
      address: "Nagpur, India",
      details: [
        "Built small-scale internal tools using JavaScript and PHP.",
        "Learned best practices in version control (Git) and Agile workflows.",
        "Created basic dashboards for monitoring server logs and analytics."
      ]
    }
  ],
  club: [
    {
      company: "Developer Students Club (DSC) - Nagpur",
      role: "Lead Developer",
      duration: "Aug 2018 – May 2019",
      address: "Nagpur, India",
      details: [
        "Organized coding workshops and hackathons with 200+ participants.",
        "Built a community website for event management and resource sharing using MERN stack.",
        "Collaborated with peers on open-source projects and GitHub contributions."
      ]
    },
    {
      company: "Hack4Change",
      role: "Open Source Contributor",
      duration: "Jan 2018 – Present",
      address: "Remote",
      details: [
        "Contributed to open-source projects focused on web accessibility and performance.",
        "Developed reusable UI components and npm packages adopted by 1k+ developers.",
        "Actively participated in code reviews and issue resolution in global projects."
      ]
    },
    {
      company: "CodeChef Nagpur Chapter",
      role: "Core Team Member",
      duration: "Aug 2017 – May 2018",
      address: "Nagpur, India",
      details: [
        "Conducted weekly coding sessions for 100+ students.",
        "Organized inter-college programming contests and hackathons.",
        "Helped peers improve problem-solving and competitive programming skills."
      ]
    },
    {
      company: "IEEE Student Branch",
      role: "Technical Volunteer",
      duration: "2016 – 2017",
      address: "Nagpur, India",
      details: [
        "Contributed to setting up technical events and coding competitions.",
        "Built a registration portal for events with automated email notifications.",
        "Worked in a cross-disciplinary team to integrate hardware + software solutions."
      ]
    }
  ]
},
projects: [
  {
    title: "E-Commerce Platform",
    img: "assets/profile.jpg",
    description:
      "A scalable e-commerce platform featuring user authentication, product catalog, cart & checkout system, order tracking, and secure payment integration.",
    link: "https://ecom-ritish.vercel.app",
    github: "https://github.com/ritishDas/e-commerce-platform",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "TailwindCSS"]
  },
  {
    title: "Portfolio Website",
    img: "assets/profile.jpg",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience. Built with responsive design and deployed with CI/CD.",
    link: "https://ritish.dev",
    github: "https://github.com/ritishDas/portfolio",
    tech: ["Next.js", "TailwindCSS", "Vercel"]
  },
  {
    title: "Chat Application",
    img: "assets/profile.jpg",
    description:
      "A real-time chat application with private rooms, typing indicators, and message history persistence using WebSockets.",
    link: "https://chat-ritish.vercel.app",
    github: "https://github.com/ritishDas/chat-app",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"]
  },
  {
    title: "Task Manager API",
    img: "assets/profile.jpg",
    description:
      "A RESTful API for task management with CRUD operations, JWT authentication, and role-based access control.",
    link: "https://taskapi-ritish.onrender.com",
    github: "https://github.com/ritishDas/task-manager-api",
    tech: ["Node.js", "Express", "MongoDB", "JWT"]
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
