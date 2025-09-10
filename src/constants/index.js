export const likes = [
  "Lebron James",
  "Batman",
  "Cards",
  "The Nice Guys",
  "Gym",
  "Russel Westbrook",
  "Steak",
  "Lamar Jackson",
  "Play Station",
  "Jayden Daniels",
  "Sushi",
  "Bed",
  "Better Call Saul",
];

export const skills = [
  "Java",
  "Python",
  "C",
  "Bash",
  "Javascript",
  "html",
  "CSS",
  "React",
  "Git",
  "Linux",
  "Agile",
  "Figma",
  "Jira",
];

// stock images
/*
  https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg 
  https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D
  https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631.jpg
*/
export const projects = [
    { 
      path: "projects/Honeypot.png", title: "Honeypot Project", description: "Engineered Linux containers simulating academic institutions to study attack behavior under distinct welcome banner messages, analyzing over 9000 attacks to uncover patterns in attacker behavior.", languages: "Bash Shell Scripting, Python, Git", link: "", 
    },
    { 
      path: "projects/BrowserBuddy.png", title: "Browser Buddy Extension", description: "Created a virtual wellness pet extension in under 24 hours at Bitcamp Hackathon. The extension implements a pomodoro timer to help user take active breaks and gamify working sessions with XP and shop tokens for the customizable pet.", languages: "React, Typescript, Git, CSS", link: "", 
    },
    { 
      path: "projects/Maze.png", title: "Maze Solver", description: "Converted large-scale mazes into graphs, mapping all nodes to an x-y coordinate system. Found the optimal solution 100% of the time using Dijkstra's algorithm, breadth-first and depth-first searches.", languages: "Java", link: "", 
    },  
    { 
      path: "projects/TouchGrass.png", title: "Touching Grass App", description: "Developed the foundational components of a social media app in 36 hours during the Bitcamp Hackathon. While the app was in its early stages, it allowed users to take photos of environmental destruction, earn points and track progress, inspired by Instagram and Pokemon Go.", languages: "React Native, JavaScript, CSS, Git", link: "", 
    },
    { 
      path: "projects/Soccer.png", title: "Dynamic Soccer Ball", description: "Prototyped an app for a dynamic soccer ball that tracks training sessions and statistics, allowing users to compare with friends. Went through the product management lifecycle, from conceptualizing to MVP creation, financial planning and prototyping.", languages: "Figma", link: "https://www.figma.com/proto/riuULK8sholAHFUfmXm2FR/Dynamic-Soccer-Ball-App?node-id=2-2&p=f&t=9Dyg8KCzjmHoqDVz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    },
];

export const technologies = [
  {
    name: "Java",
    icon: "java",
    category: "Languages"
  },
  {
    name: "Python",
    icon: "python",
    category: "Languages"
  },
  {
    name: "C",
    icon: "c",
    category: "Languages"
  },
  {
    name: "C#",
    icon: "csharp",
    category: "Languages"
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "Languages"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "Languages"
  },
  {
    name: "HTML/CSS",
    icon: "htmlcss",
    category: "Languages"
  },
  {
    name: "Bash Shell",
    icon: "bash",
    category: "Languages"
  },
  
  {
    name: "React.js",
    icon: "react",
    category: "Frameworks"
  },
  {
    name: "Node.js",
    icon: "node",
    category: "Frameworks"
  },
  {
    name: ".NET",
    icon: "net",
    category: "Frameworks"
  },
  {
    name: "Qiskit",
    icon: "qiskit",
    category: "Frameworks"
  },

  
  {
    name: "Git",
    icon: "git",
    category: "Dev Tools"
  },
  {
    name: "Linux",
    icon: "linux",
    category: "Dev Tools"
  },
  {
    name: "Flask",
    icon: "flask",
    category: "Dev Tools"
  },
  {
    name: "MATLAB",
    icon: "matlab",
    category: "Dev Tools"
  },

];

export const experiences = [
  {
    company: "Leidos",
    role: "Software Engineering Intern",
    date: "Summer 2025",
    location: "Edgewood, MD",
    description: "Developed complete facial comparison service in C#/.NET with rigourous unit testing. This boosted verification by 30%, eliminated a third-party dependency, saved $10,000s annually, and I delivered project 25% faster than expected.",
    logo: "./experiences/leidos.jpg",
    zoom: 1.5, 
  },
  {
    company: "DSH",
    role: "Software Engineering Intern",
    date: "May 2025 - Present",
    location: "Remote",
    description: "Assisting production of an AI-powered job application platform, generating tailored resumes and cover letters for specific roles. Creating features with Python, Flask and React working directly with the CEO.",
    logo: "./experiences/dalex.jpg",
    link: "https://www.linkedin.com/company/dalex-softworks-holdings/",
    zoom: 1.0, 
  },
  {
    company: "NGC",
    role: "Software Engineering Intern",
    date: "Summer 2024",
    location: "Linthicum, MD",
    description: "Led website development by coordinating meetings, communicating with stakeholders and delegating tasks; boosting awareness of services for 100s. Created app to simplify 20+ steps, cutting approval pipeline times 50%.",
    logo: "./experiences/northrop.png",
    zoom: 0.8,
  },
  {
    company: "Breakerspace",
    role: "Cybersecurity Research Assistant",
    date: "Jan 2025 - Present",
    location: "UMD",
    description: "Building fraud prevention tools to protect older adults from online scams. Prototyping an extension for real-time URL verification and developed a web scraper to analyze 25,000 accounts identifying fraudulent features.",
    logo: "./experiences/break.png",
    link: "https://breakerspace.cs.umd.edu/",
    zoom: 1.5, 
  },
  {
    company: "US News App Dev",
    role: "Full Stack Engineer",
    date: "Sep 2024 - May 2025",
    location: "UMD",
    description: "Assembled data verification tool to optimize the content validation process. Automated Jupyter Notebooks generation, implemented dynamic datapage features and enhanced frontend design improving UI/UX.",   
    descriptiom: "Led website development by coordinating meetings, communicating with stakeholders and delegating tasks; boosting awareness of services for 100s. Created app to simplify 20+ steps, cutting approval pipeline times 50%.",
    logo: "./experiences/theusnews.png",
    zoom: 1.0, 
  },
];

