// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typewriter Effect
const typewriterText = document.querySelector(".typewriter-text");
const typewriterCursor = document.querySelector(".typewriter-cursor");
const words = [
  "Computer Science Engineer",
  "Prince Chauhan",
  "Full Stack Developer (MERN) & Gen AI Developer",
  "Developer Advocate",
  "Open Source Contributor",
  "Learning DSA with java",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriterText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriterText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start typewriter effect
typeWriter();

// Particle.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#00ff88", "#ff0080", "#0088ff"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ff88",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".about-content, .skill-category, .project-card, .contact-content",
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Simple form validation
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// Skill items hover effect
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(2deg)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Project cards tilt effect now handled dynamically in fetchGitHubProjects via addTiltEffect

// Dynamic cursor effect
document.addEventListener("mousemove", (e) => {
  const cursor = document.createElement("div");
  cursor.className = "cursor-trail";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.position = "fixed";
  cursor.style.width = "4px";
  cursor.style.height = "4px";
  cursor.style.background = "var(--accent-primary)";
  cursor.style.borderRadius = "50%";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "9999";
  cursor.style.opacity = "0.8";
  cursor.style.transition = "all 0.5s ease";

  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.style.transform = "scale(0)";
    cursor.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    cursor.remove();
  }, 600);
});

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Easter egg activated!
    document.body.style.animation = "rainbow 2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 5000);

    // Add rainbow animation
    const style = document.createElement("style");
    style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
    document.head.appendChild(style);

    alert("ðŸŽ‰ Easter egg activated! ThePrimeagen approves!");
  }
});

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms - ThePrimeagen would be proud!`);
  });
}

// Lazy loading for images (if any are added later)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Add some NeoVim-style commands
const commands = {
  ":q": () => {
    if (confirm("Are you sure you want to quit?")) {
      window.close();
    }
  },
  ":help": () => {
    alert(
      "Available commands:\n:q - Quit\n:help - Show this help\n:w - Save (does nothing here)\n:e - Edit (opens GitHub)",
    );
  },
  ":w": () => {
    alert('ðŸ’¾ "Website saved" (not really, this is just for fun!)');
  },
  ":e": () => {
    window.open("https://github.com/princekumar9234", "_blank");
  },
};

document.addEventListener("keydown", (e) => {
  if (e.key === ":" && e.ctrlKey === false && e.metaKey === false) {
    const command = prompt("Enter command:");
    if (command && commands[command]) {
      commands[command]();
    } else if (command) {
      alert(`Unknown command: ${command}\nType :help for available commands`);
    }
  }
});

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ThePrice's portfolio loaded successfully!");
  console.log('💡 Try pressing ":" for some NeoVim-style commands!');
  console.log("🎯 Hint: There's an easter egg...");
  
  // Update scroll progress bar
  window.addEventListener("scroll", updateScrollProgress);
  
  // Theme Toggle Logic
  initThemeToggle();
  
  // Fetch GitHub Projects
  fetchGitHubProjects();
  
  // Initialize Staggered Animations
  initStaggeredAnimations();
});

function updateScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
}

function initStaggeredAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        
        // If it's a section title, add a special class for underline animation
        if (entry.target.classList.contains("section-title")) {
          entry.target.style.setProperty('--reveal-delay', '0.5s');
        }
      }
    });
  }, observerOptions);

  // Re-query elements including new grid items
  const elementsToAnimate = document.querySelectorAll(
    ".hero-text, .hero-visual, .section-title, .about-content, .skill-category, .project-card, .contact-content"
  );
  
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in"); // Add fade-in class for initial state
    staggerObserver.observe(el);
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const themeIcon = themeToggle.querySelector("i");
  
  // Check for saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
  
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    
    if (body.classList.contains("light-theme")) {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    }
  });
}

async function fetchGitHubProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const username = "princekumar9234";
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) throw new Error("Failed to fetch projects");
    
    const repos = await response.json();
    
    // Hosted links mapping provided by the user
    const projectHostLinks = {
      "solar-system": "https://solar-system-pink-gamma.vercel.app/",
      "portfilo-Website": "https://portfilo-website-pi.vercel.app/",
      "signup-page": "https://signup-page-roan-mu.vercel.app/",
      "Spotify-clone": "https://spotify-clone-gilt-alpha.vercel.app/",
      "learn-platform": "https://learn-platform-1.onrender.com/",
      "coffee-shop": "https://coffee-shop-gilt-delta.vercel.app/",
      "Currency-convertor": "https://currency-convertor-alpha-bice.vercel.app/",
      "Stone-paper": "https://stone-paper-chi.vercel.app/",
      "Super-bike-Shop": "https://super-bike-shop.vercel.app/",
      "tik-tac-toe-game": "https://tik-tac-toe-game-eta.vercel.app/",
      "Simple-Info": "https://simple-info-pi.vercel.app/",
      "Wheater-app": "https://wheater-app-hazel.vercel.app/",
      "python-learn-platform": "https://python-learn-platform.vercel.app/",
      "Online-Quiz": "https://online-quiz-rust.vercel.app/",
      "Scientific-Calculator": "https://scientific-calculator-vert-phi.vercel.app/",
      "Digital-Clock": "https://digital-clock-sigma-snowy.vercel.app/",
      "To-Do-App": "https://to-do-app-blond-two-36.vercel.app/",
      "To-Do-List": "https://to-do-app-blond-two-36.vercel.app/",
      "Attendance-System": "https://attandance-management-system-liard.vercel.app/",
      "Attendance-Management-System": "https://attandance-management-system-liard.vercel.app/",
      "Student-Result-Management": "https://student-result-management-system-kappa-three.vercel.app/",
      "Student-Result-Management-System": "https://student-result-management-system-kappa-three.vercel.app/"
    };
    
    // Custom descriptions and tags for a more professional look
    const projectDetails = {
      "solar-system": {
        desc: "Interactive 3D Solar System visualization with orbital mechanics and planet data.",
        tags: ["Three.js", "Javascript", "WebGL", "CSS"]
      },
      "Spotify-clone": {
        desc: "A fully functional music player UI with song search, playlists, and real-time playback controls.",
        tags: ["HTML", "CSS", "Javascript", "API Integration"]
      },
      "Online-Quiz": {
        desc: "Dynamic MCQ platform with timer, progress tracking, instant results, and performance analysis.",
        tags: ["React", "State Management", "Animations"]
      },
      "Scientific-Calculator": {
        desc: "Advanced calculator with logarithmic, trigonometric, and algebraic functions with premium UI.",
        tags: ["Javascript", "MathJS", "Glassmorphism"]
      },
      "Attendance-Management-System": {
        desc: "Full-stack student attendance tracker with date-wise analytics and real-time database.",
        tags: ["MERN Stack", "Context API", "Responsive"]
      },
      "Student-Result-Management-System": {
        desc: "Complete portal for managing student scores, grades, and generating digital performance reports.",
        tags: ["React", "Express", "Node.js", "MongoDB"]
      },
      "coffee-shop": {
        desc: "Modern and premium landing page for a specialized coffee brand with smooth scroll animations.",
        tags: ["HTML5", "CSS3", "GSAP", "Responsive"]
      },
      "Simple-ChatBot": {
        desc: "AI-powered chat interface using NLP to provide intelligent responses to user queries.",
        tags: ["Node.js", "AI", "NLP", "Dialogflow"]
      },
      "DarkBot": {
        desc: "A specialized Discord bot for community management, automation, and dark-theme aesthetics.",
        tags: ["Discord.js", "Node.js", "Database"]
      },
      "Wheater-app": {
        desc: "Live weather forecast app using OpenWeatherMap API with location detection and dynamic icons.",
        tags: ["React", "Fetch API", "Geolocation"]
      },
      "python-learn-platform": {
        desc: "Interactive learning platform for Python developers with code snippets and module tracking.",
        tags: ["FullStack", "Python", "React", "PostgreSQL"]
      },
      "Digital-Clock": {
        desc: "Minimalist digital clock with world time zones, dark mode support, and interactive alarm features.",
        tags: ["Javascript", "Premium UI", "CSS Animations"]
      },
      "To-Do-App": {
        desc: "Performance-oriented task manager with drag-and-drop, deadlines, and multi-device sync.",
        tags: ["Javascript", "LocalStorage", "UI Design"]
      },
      "signup-page": {
        desc: "Modern authentication UI with glassmorphism, form validation, and smooth error handling.",
        tags: ["HTML", "Custom CSS", "Vanilla JS"]
      },
      "Stone-paper": {
        desc: "Interactive Stone-Paper-Scissors game with advanced UI and score tracking system.",
        tags: ["Logic", "Javascript", "Game UI"]
      }
    };
    
    // Clear projects grid
    projectsGrid.innerHTML = "";
    
    // Filter out forks or specific repos
    const filteredRepos = repos.filter(repo => !repo.fork);
    
    filteredRepos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card fade-in";
      
      // Get the hosted link
      const hostedUrl = projectHostLinks[repo.name] || repo.homepage;
      
      // Get the custom details if available
      const details = projectDetails[repo.name] || {
        desc: repo.description || "A professional project built with quality code and modern architecture.",
        tags: repo.language ? [repo.language] : (repo.topics || ["Development"])
      };
      
      card.innerHTML = `
        <div class="project-header">
          <div class="project-folder">
            <i class="fas fa-folder"></i>
          </div>
          <div class="project-links">
            <a href="${repo.html_url}" target="_blank" title="GitHub Repository">
              <i class="fab fa-github"></i>
            </a>
            ${hostedUrl ? `
            <a href="${hostedUrl}" target="_blank" title="Live Demo">
              <i class="fas fa-external-link-alt"></i>
            </a>
            ` : ""}
          </div>
        </div>
        <h3 class="project-title">${repo.name.replace(/-/g, " ")}</h3>
        <p class="project-description">
          ${details.desc}
        </p>
        <div class="project-tech">
          ${details.tags.slice(0, 5).map(tag => `<span>${tag.toLowerCase()}</span>`).join("")}
        </div>
      `;
      
      projectsGrid.appendChild(card);
      // Assuming 'observer' is defined elsewhere for fade-in animation
      // If not, this line might cause an error or needs 'observer' to be defined.
      // For this change, I'll assume it's defined globally or in a scope accessible here.
      if (typeof observer !== 'undefined') {
        observer.observe(card); // Re-observe for animation
      }
      
      // Add tilt effect to new card
      addTiltEffect(card);
    });
    
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    projectsGrid.innerHTML = `
      <div class="error-message" style="grid-column: 1/-1; text-align: center; color: var(--accent-secondary);">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Oops! Failed to load projects from GitHub. Please try again later.</p>
      </div>
    `;
  }
}

// Separate function for tilt effect to apply to dynamic elements
function addTiltEffect(card) {
  card.addEventListener("mouseenter", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });

  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
}
