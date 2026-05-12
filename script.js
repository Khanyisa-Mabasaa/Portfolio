// Portfolio data powers the visible cards and the Khanyisa_AI assistant.
const profile = {
  name: "Khanyisa Mabasa",
  title: "Junior AI Software Developer | Data Analytics | Interactive Web Experiences",
  email: "khanyimabasaa@gmail.com",
  phone: "063 140 7110",
  location: "Midrand, South Africa",
  github: "https://github.com/Khanyisa-Mabasaa",
  linkedin: "https://www.linkedin.com/in/khanyisa-mabasa?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  certification: "AI Software Developer NQF Level 5, Google Data Analytics Professional Certificate, and Technical Support NQF Level 4",
  skills: [
    "AI Software Development", "Python", "JavaScript", "SQL", "Git", "GitHub",
    "HTML5", "CSS", "Three.js", "API Integration", "Responsive Web Prototyping",
    "Bubble.io", "Bubble Workflows", "Bubble Database Design", "GDevelop",
    "Game Logic", "HTML5 Game Export", "Leaderboards", "Data Analytics",
    "Spreadsheets", "Tableau", "R Programming", "CNN Models", "Data Preprocessing"
  ],
  services: [
    "AI Software Development", "Data Analytics", "Frontend Development", "No-Code App Prototyping",
    "Game Development", "Interactive 3D Prototypes", "Technical Support", "Responsive Web Experiences"
  ],
  projects: [
    {
      title: "AI-Powered 3D & Avatar Interaction System",
      description: "An AI-powered prototype that converts text or image input into interactive 3D model experiences and avatar actions.",
      problem: "Make AI outputs feel more visual and interactive than a plain text response.",
      role: "Built the prototype concept, connected AI-style inputs to web-based interaction, and shaped the user experience.",
      outcome: "Built with AI product thinking, web-based interaction, and Three.js-style 3D presentation for immersive user experiences.",
      learned: "Practiced AI product design, interactive frontend thinking, and 3D web presentation.",
      tech: ["AI Prototype", "Three.js", "Interactive 3D", "Netlify"],
      links: [
        { label: "Live Prototype", url: "https://ai-engineeringg.netlify.app" }
      ]
    },
    {
      title: "CatchyMash - Checkers Sixty60 Campaign Game",
      description: "A mobile-friendly 60-second grocery-catching game concept with falling items, random spawn positions, timer control, scoring, and same-scene game-over behavior.",
      problem: "Turn a campaign idea into a playable, mobile-friendly game with a connected web experience.",
      role: "Developed the GDevelop gameplay logic, prepared the Bubble.io site flow, and planned the leaderboard/database structure.",
      outcome: "Created as a campaign game prototype combining GDevelop gameplay logic with a Bubble.io web structure, sign-up flow, manual score submission, and leaderboard concept.",
      learned: "Practiced game logic, timers, collision rules, score systems, no-code workflows, and campaign product presentation.",
      tech: ["GDevelop", "JavaScript Events", "Game Logic", "Bubble.io"],
      links: [
        { label: "Play GDevelop Game", url: "https://gd.games/games/b7ec46e4-b960-4047-b95f-f6fc632fdf18" },
        { label: "Open Bubble App", url: "https://catchymash-web-31017.bubbleapps.io/version-test/?debug_mode=true" }
      ]
    },
    {
      title: "Breast Cancer Detection Using CNN",
      description: "A machine learning project for breast cancer classification using a Convolutional Neural Network workflow.",
      problem: "Use a deep learning workflow to classify breast cancer image data more effectively.",
      role: "Prepared image data, built the CNN workflow, trained and validated the model, and reviewed performance.",
      outcome: "Covered medical image preprocessing, model training, validation, performance evaluation, and optimisation.",
      learned: "Strengthened understanding of CNNs, data preprocessing, validation, and model evaluation.",
      tech: ["Python", "CNN", "Model Training", "Data Preprocessing"],
      links: [
        { label: "Portfolio Brief", url: "#assistant" }
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "This futuristic developer portfolio with animated visuals, responsive layouts, live project links, certificates, and a built-in recruiter assistant.",
      problem: "Present junior developer skills, links, certificates, and project proof in a way recruiters can scan quickly.",
      role: "Designed the portfolio structure, content, visual direction, assistant flow, and responsive frontend experience.",
      outcome: "Designed to present technical skills, project range, certificates, and contact routes in one polished experience.",
      learned: "Practiced polished UI layout, recruiter-focused content, responsive design, and JavaScript-driven portfolio data.",
      tech: ["HTML5", "CSS", "JavaScript", "Responsive UI"],
      links: [
        { label: "View Site", url: "#home" },
        { label: "GitHub Profile", url: "https://github.com/Khanyisa-Mabasaa" }
      ]
    }
  ]
};

const suggestedQuestions = [
  "What skills does Khanyisa have?",
  "Tell me about Khanyisa's certificates.",
  "What projects has Khanyisa built?",
  "What experience does Khanyisa have?",
  "What technologies does Khanyisa use?",
  "What services does Khanyisa offer?",
  "Tell me about the AI avatar prototype.",
  "Why should we hire Khanyisa?"
];

const typingLines = [
  "Khanyisa_AI portfolio interface activated.",
  "Building AI-powered digital experiences.",
  "Creating AI prototypes, games, data projects, and web experiences.",
  "Feminine future-tech meets practical software thinking."
];

const knowledgeBase = [
  {
    keys: ["skill", "skills", "can do", "abilities", "strength"],
    answer: () => `Khanyisa has a strong AI, data, and interactive development skill set: ${profile.skills.join(", ")}. Her strengths include AI prototypes, responsive frontends, Bubble.io app workflows, GDevelop games, SQL/data analysis, and practical problem solving.`
  },
  {
    keys: ["certificate", "certification", "qcto", "nqf", "training", "qualified", "google", "coursera", "data analytics", "technical support"],
    answer: () => "Khanyisa's certificates include AI Software Developer NQF Level 5 through MICTSETA/QCTO-aligned training, Google Data Analytics Professional Certificate through Coursera completed on Jun 15, 2025, and Technical Support NQF Level 4 through MICTSETA."
  },
  {
    keys: ["project", "projects", "built", "portfolio", "work", "demo", "checkers", "catchymash", "gdevelop", "bubble", "netlify"],
    answer: () => `Khanyisa's featured projects include ${profile.projects.map(project => project.title).join(", ")}. They show range across AI-powered 3D prototypes, GDevelop games, Bubble.io web apps, machine learning, and responsive frontend work.`
  },
  {
    keys: ["technology", "technologies", "tech stack", "tools", "use"],
    answer: () => "Khanyisa uses Python, JavaScript, SQL, Git, GitHub, HTML5, CSS, Three.js, Bubble.io, GDevelop, Netlify, Render, Google Colab, Jupyter Notebook, Kaggle, spreadsheets, Tableau, and R for AI, data, web, and interactive product work."
  },
  {
    keys: ["service", "services", "offer", "help"],
    answer: () => `Khanyisa offers ${profile.services.join(", ")}. She can help create AI prototypes, data-informed dashboards or analysis workflows, responsive websites, Bubble app concepts, game experiences, and interactive digital products.`
  },
  {
    keys: ["avatar", "3d", "animation", "prototype", "immersive"],
    answer: () => "Khanyisa created an AI-powered 3D and avatar interaction prototype that converts text or image input into interactive 3D model experiences and natural-language avatar actions. View it at https://ai-engineeringg.netlify.app."
  },
  {
    keys: ["hire", "why", "recruit", "job", "role", "candidate"],
    answer: () => "You should consider Khanyisa because she combines AI software development training, data analytics, frontend prototyping, game development, Bubble.io workflows, technical support experience, and strong curiosity. She can turn practical ideas into interactive, usable digital products."
  },
  {
    keys: ["goal", "goals", "interest", "interests", "passion", "future"],
    answer: () => "Khanyisa is passionate about AI innovation, data-informed problem solving, futuristic digital experiences, creative technology, interactive media, and building products that feel useful, beautiful, and memorable."
  },
  {
    keys: ["process", "workflow", "approach", "build method"],
    answer: () => "Khanyisa works from discovery to prototype to polish: she clarifies the goal, builds a working version quickly, then improves responsiveness, motion, clarity, accessibility, and interaction details until the experience feels complete."
  },
  {
    keys: ["retro rabbit", "synergy", "makwa", "work experience", "training experience"],
    answer: () => "Khanyisa has AI Software Developer training experience with Retro Rabbit / Synergy Transformation Solution from June 2025 to May 2026, plus Technical Support training experience with Makwa IT Technologies from September 2023 to August 2024."
  },
  {
    keys: ["contact", "email", "reach", "github", "linkedin", "phone", "cv", "resume"],
    answer: () => `You can contact Khanyisa at ${profile.email} or ${profile.phone}. She is based in ${profile.location}. GitHub: ${profile.github}. LinkedIn: ${profile.linkedin}. Her downloadable CV is linked in the hero and contact sections.`
  }
];

const skillsGrid = document.getElementById("skillsGrid");
const servicesGrid = document.getElementById("servicesGrid");
const projectGrid = document.getElementById("projectGrid");
const suggestions = document.getElementById("suggestions");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const header = document.getElementById("siteHeader");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");
const toast = document.getElementById("toast");
const cursorGlow = document.getElementById("cursorGlow");

document.getElementById("year").textContent = new Date().getFullYear();

const skillIconMap = {
  "AI Software Development": { label: "AI", color: "#ff6fb1", icon: "brain" },
  Python: { label: "Py", color: "#ffd76f", icon: "code" },
  JavaScript: { label: "JS", color: "#f7df1e", icon: "code" },
  SQL: { label: "SQL", color: "#76f7ff", icon: "database" },
  Git: { label: "Git", color: "#ff7a59", icon: "branch" },
  GitHub: { label: "GH", color: "#ffffff", icon: "github" },
  HTML5: { label: "5", color: "#ff7a59", icon: "code" },
  CSS: { label: "CSS", color: "#76f7ff", icon: "layout" },
  "Three.js": { label: "3D", color: "#c98cff", icon: "cube" },
  "API Integration": { label: "API", color: "#ff9ac8", icon: "nodes" },
  "Responsive Web Prototyping": { label: "UI", color: "#ff9ac8", icon: "layout" },
  "Bubble.io": { label: "BB", color: "#c98cff", icon: "bubble" },
  "Bubble Workflows": { label: "Flow", color: "#c98cff", icon: "nodes" },
  "Bubble Database Design": { label: "DB", color: "#76f7ff", icon: "database" },
  GDevelop: { label: "Game", color: "#ff6fb1", icon: "game" },
  "Game Logic": { label: "Logic", color: "#ff9ac8", icon: "game" },
  "HTML5 Game Export": { label: "Web", color: "#ff7a59", icon: "layout" },
  Leaderboards: { label: "Rank", color: "#ffd76f", icon: "chart" },
  "Data Analytics": { label: "Data", color: "#76f7ff", icon: "chart" },
  Spreadsheets: { label: "Grid", color: "#8fffb0", icon: "table" },
  Tableau: { label: "Tab", color: "#76f7ff", icon: "chart" },
  "R Programming": { label: "R", color: "#9d7cff", icon: "code" },
  "CNN Models": { label: "CNN", color: "#ff6fb1", icon: "brain" },
  "Data Preprocessing": { label: "Prep", color: "#8fffb0", icon: "nodes" }
};

function getSkillIcon(skill) {
  const meta = skillIconMap[skill] || { label: skill.slice(0, 3), color: "#ff9ac8", icon: "code" };
  const icons = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.38-3.37-1.38-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"/></svg>`,
    database: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c4.42 0 8 1.57 8 3.5v11c0 1.93-3.58 3.5-8 3.5s-8-1.57-8-3.5v-11C4 4.57 7.58 3 12 3Zm0 2C8.13 5 6 6.16 6 6.5S8.13 8 12 8s6-1.16 6-1.5S15.87 5 12 5Zm6 4.15C16.55 9.7 14.42 10 12 10s-4.55-.3-6-.85v2.35c0 .34 2.13 1.5 6 1.5s6-1.16 6-1.5V9.15Zm0 5C16.55 14.7 14.42 15 12 15s-4.55-.3-6-.85v3.35c0 .34 2.13 1.5 6 1.5s6-1.16 6-1.5v-3.35Z"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3a4 4 0 0 0-4 4v.35A3.5 3.5 0 0 0 3 10.5c0 .98.4 1.87 1.04 2.5A4 4 0 0 0 8 18h1V3Zm6 0v15h1a4 4 0 0 0 3.96-5A3.5 3.5 0 0 0 21 10.5a3.5 3.5 0 0 0-2-3.15V7a4 4 0 0 0-4-4h0Zm-4 2h2v14h-2V5Z"/></svg>`,
    branch: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3a3 3 0 0 1 1 5.83V15a4 4 0 0 0 4 4h1.17a3 3 0 1 1 0 2H12a6 6 0 0 1-6-6V8.83A3 3 0 0 1 7 3Zm10 0a3 3 0 0 1 1 5.83V10a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 2-2V8.83A3 3 0 0 1 17 3Z"/></svg>`,
    layout: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm2 1v4h12V6H6Zm0 6v7h5v-7H6Zm7 0v7h5v-7h-5Z"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h15v2H3V4h2v15Zm3-2V9h3v8H8Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"/></svg>`,
    table: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm2 2v3h12V6H6Zm0 5v3h5v-3H6Zm7 0v3h5v-3h-5Zm-7 5v2h5v-2H6Zm7 0v2h5v-2h-5Z"/></svg>`,
    game: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9Zm8.5 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM19 14a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 19 14ZM7 6h10a5 5 0 0 1 4.86 3.8l.96 3.84A4.3 4.3 0 0 1 18.64 19c-1.2 0-2.34-.5-3.15-1.38L14.02 16h-4.04l-1.47 1.62A4.26 4.26 0 0 1 1.18 13.64l.96-3.84A5 5 0 0 1 7 6Z"/></svg>`,
    nodes: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4a3 3 0 0 1 2.82 2h4.36A3 3 0 1 1 17 10a2.95 2.95 0 0 1-2.82-2H9.82A3 3 0 0 1 8 9.82v4.36A3 3 0 1 1 6 14.18V9.82A3 3 0 0 1 7 4Zm10 10a3 3 0 1 1-2.82 4H9.82a3 3 0 0 1 0-2h4.36A3 3 0 0 1 17 14Z"/></svg>`,
    bubble: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4a5 5 0 0 1 4.58 7.01A4 4 0 1 1 11 17.73 5 5 0 1 1 9 4Zm7.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>`,
    cube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Zm0 2.3L6.6 7.35 12 10.4l5.4-3.05L12 4.3ZM6 9.05v5.28l5 2.82v-5.28L6 9.05Zm12 0-5 2.82v5.28l5-2.82V9.05Z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.4 16.6-1.4 1.4L2 12l6-6 1.4 1.4L4.8 12l4.6 4.6Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4ZM11 19h-2l4-14h2l-4 14Z"/></svg>`
  };

  return `<span class="skill-logo" style="--skill-color: ${meta.color}">${icons[meta.icon] || icons.code}<em>${meta.label}</em></span>`;
}

function renderCards() {
  skillsGrid.innerHTML = profile.skills.map((skill) => `
    <article class="skill-card reveal">
      ${getSkillIcon(skill)}
      <h3>${skill}</h3>
    </article>
  `).join("");

  servicesGrid.innerHTML = profile.services.map((service) => `
    <article class="service-card reveal">
      <span class="icon">${service.split(" ").map(word => word[0]).join("").slice(0, 3)}</span>
      <h3>${service}</h3>
      <p>Premium ${service.toLowerCase()} shaped for futuristic, responsive, and engaging digital products.</p>
    </article>
  `).join("");

  projectGrid.innerHTML = profile.projects.map((project, index) => `
    <article class="project-card reveal">
      <div class="project-media">
        <span>PROJECT ${String(index + 1).padStart(2, "0")}</span>
        <small>${project.tech[0]}</small>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <dl class="case-study">
          <div><dt>Problem</dt><dd>${project.problem}</dd></div>
          <div><dt>My role</dt><dd>${project.role}</dd></div>
          <div><dt>Learned</dt><dd>${project.learned}</dd></div>
        </dl>
        <p class="project-outcome">${project.outcome}</p>
        <div class="tech-list">${project.tech.map(item => `<span>${item}</span>`).join("")}</div>
        <div class="project-actions">
          ${project.links.map(link => `<a class="mini-btn" href="${link.url}" ${link.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${link.label}</a>`).join("")}
          <button class="mini-btn" type="button" data-project="${project.title}">Portfolio Brief</button>
        </div>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.project;
      const project = profile.projects.find(item => item.title === title);
      askKhanyisaAI(`Tell me about ${project.title}. ${project.outcome}`);
      document.getElementById("assistant").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function startHeroTyping() {
  const target = document.getElementById("typingText");
  let line = 0;
  let index = 0;
  let deleting = false;

  function tick() {
    const phrase = typingLines[line];
    target.textContent = phrase.slice(0, index);

    if (!deleting && index < phrase.length) {
      index += 1;
      setTimeout(tick, 55);
      return;
    }

    if (!deleting) {
      deleting = true;
      setTimeout(tick, 1300);
      return;
    }

    if (index > 0) {
      index -= 1;
      setTimeout(tick, 28);
      return;
    }

    deleting = false;
    line = (line + 1) % typingLines.length;
    setTimeout(tick, 260);
  }

  tick();
}

function addMessage(text, sender = "ai") {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingBubble() {
  const bubble = document.createElement("div");
  bubble.className = "message ai typing-bubble";
  bubble.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return bubble;
}

function getAIResponse(question) {
  const normalized = question.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  knowledgeBase.forEach((entry) => {
    const score = entry.keys.reduce((total, key) => total + (normalized.includes(key) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  });

  if (bestMatch) {
    return bestMatch.answer();
  }

  return "I can help with Khanyisa's skills, projects, certificates, technologies, services, experience, goals, and contact details. Try asking: Why should we hire Khanyisa?";
}

function askKhanyisaAI(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;

  addMessage(cleanQuestion, "user");
  const typingBubble = addTypingBubble();
  const response = getAIResponse(cleanQuestion);
  const responseDelay = Math.min(1300, 450 + response.length * 8);

  setTimeout(() => {
    typingBubble.remove();
    addMessage(response, "ai");
  }, responseDelay);
}

window.askKhanyisaAI = askKhanyisaAI;

window.handleKhanyisaAISubmit = function handleKhanyisaAISubmit(event) {
  event.preventDefault();
  askKhanyisaAI(chatInput.value);
  chatInput.value = "";
};

function setupAssistant() {
  suggestions.innerHTML = suggestedQuestions
    .map((question) => `<button type="button">${question}</button>`)
    .join("");

  suggestions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => askKhanyisaAI(button.textContent));
  });

  chatForm.addEventListener("submit", window.handleKhanyisaAISubmit);

  addMessage("Hello, I am Khanyisa_AI. Ask me about Khanyisa's skills, projects, certificates, services, experience, or why she would be a strong candidate.", "ai");
}

function setupNavigation() {
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];

  function updateNav() {
    header.classList.toggle("scrolled", window.scrollY > 22);
    const current = sections.reduce((active, section) => {
      return section.offsetTop <= window.scrollY + 160 ? section.id : active;
    }, "home");

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}

function setupCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      let value = 0;
      const timer = setInterval(() => {
        value += 1;
        element.textContent = value;
        if (value >= target) clearInterval(timer);
      }, 45);

      observer.unobserve(element);
    });
  }, { threshold: 0.7 });

  document.querySelectorAll("[data-count]").forEach(counter => observer.observe(counter));
}

function setupContactForm() {
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  });
}

function setupCursorGlow() {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

function setupParticles() {
  const canvas = document.getElementById("particleCanvas");
  const context = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = window.innerWidth < 700 ? 44 : 86;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.5,
      speed: Math.random() * 0.45 + 0.12,
      alpha: Math.random() * 0.6 + 0.18
    }));
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      if (particle.y < -10) {
        particle.y = canvas.height + 10;
        particle.x = Math.random() * canvas.width;
      }
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(85, 244, 255, ${particle.alpha})`;
      context.shadowColor = "rgba(85, 244, 255, 0.8)";
      context.shadowBlur = 12;
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

renderCards();
startHeroTyping();
setupAssistant();
setupNavigation();
setupReveal();
setupCounters();
setupContactForm();
setupCursorGlow();
setupParticles();
