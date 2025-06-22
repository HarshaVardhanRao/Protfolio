const toggleButton = document.getElementById('toggleDevMode');
const toggleButtonSidebar = document.getElementById('toggleDevModeSidebar');
const themeStylesheet = document.getElementById('theme-stylesheet');
const devNavbar = document.getElementById('dev-navbar');
const sidebar = document.getElementById('sidebar');

let devMode = false;

const devTransitionDuration = 2600; // ms

function showDevTransition() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'dev-transition-overlay';
  overlay.innerHTML = `
    <div class="dev-transition-terminal">
      <pre class="ascii-art">  ____            __  __           _      \n |  _ \\ ___  ___ |  \\/  | ___   __| | ___ \n | |_) / _ \\/ _ \\| |\\/| |/ _ \\ / _\` |/ _ \\ \n |  _ <  __/ (_) | |  | | (_) | (_| |  __/\n |_| \\_\\___|\\___/|_|  |_|\\___/ \\__,_|\\___|\n      </pre>
      <div class="dev-transition-text">Switching to <span class="dev-highlight">Dev Mode</span>...</div>
      <div class="dev-transition-progress">
        <div class="dev-transition-bar"></div>
      </div>
      <div class="dev-transition-glitch">[ Initializing environment... ]</div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Animate progress bar and glitch
  setTimeout(() => {
    overlay.querySelector('.dev-transition-bar').style.width = '100%';
    overlay.querySelector('.dev-transition-glitch').textContent = '[ Loading raw assets... ]';
  }, 700);
  setTimeout(() => {
    overlay.querySelector('.dev-transition-glitch').textContent = '[ Applying industrial theme... ]';
  }, 1400);
  setTimeout(() => {
    overlay.querySelector('.dev-transition-glitch').textContent = '[ Welcome to Dev Mode! ]';
  }, 2000);

  // Remove overlay after transition
  setTimeout(() => {
    overlay.classList.add('dev-transition-fadeout');
    setTimeout(() => overlay.remove(), 600);
  }, devTransitionDuration);
}

function setDevModeUI(isDev) {
  if (isDev) {
    devNavbar.style.display = 'flex';
    sidebar.style.display = 'none';
    document.body.classList.add('dev-mode');
    document.querySelector('.main-cards').classList.add('dev-terminal-grid');
    // Add dev-mode section classes
    document.getElementById('about').className = 'card terminal-section system-status';
    document.getElementById('projects').className = 'card terminal-section endpoints-section';
    document.getElementById('experience').className = 'card terminal-section logs-section';
    document.getElementById('resume').className = 'card terminal-section cli-resume-section';
    // Add section titles as terminal prompts
    document.getElementById('about-heading').innerHTML = '<span class="prompt">$</span> System Status';
    document.getElementById('projects-heading').innerHTML = '<span class="prompt">$</span> Endpoints';
    document.getElementById('experience-heading').innerHTML = '<span class="prompt">$</span> Deployments';
    document.getElementById('resume-heading').innerHTML = '<span class="prompt">$</span> CLI Resume';
  } else {
    devNavbar.style.display = 'none';
    sidebar.style.display = 'flex';
    document.body.classList.remove('dev-mode');
    document.querySelector('.main-cards').classList.remove('dev-terminal-grid');
    // Restore original section classes
    document.getElementById('about').className = 'card';
    document.getElementById('projects').className = 'card';
    document.getElementById('experience').className = 'card';
    document.getElementById('resume').className = 'card';
    // Restore original section titles
    document.getElementById('about-heading').innerHTML = '<i class="fa-solid fa-user"></i> About Me';
    document.getElementById('projects-heading').innerHTML = '<i class="fa-solid fa-diagram-project"></i> Projects';
    document.getElementById('experience-heading').innerHTML = '<i class="fa-solid fa-trophy"></i> Experience & Achievements';
    document.getElementById('resume-heading').innerHTML = '<i class="fa-solid fa-file-lines"></i> Resume';
  }
}

function switchToDevMode() {
  setDevModeUI(true);
  devMode = true;
  themeStylesheet.setAttribute('href', 'dev-style.css');
  // Show dev navbar, hide sidebar
  document.getElementById('dev-navbar').style.display = 'flex';
  document.getElementById('sidebar').style.display = 'none';
  // Update headings and content for dev mode
  document.getElementById('nav-about').textContent = 'System Status';
  document.getElementById('nav-projects').textContent = 'Endpoints';
  document.getElementById('nav-experience').textContent = 'Deployments';
  document.getElementById('nav-resume').textContent = 'CLI Resume';
  document.getElementById('about-heading').textContent = 'System Status';
  document.getElementById('projects-heading').textContent = 'Endpoints';
  document.getElementById('experience-heading').textContent = 'Deployments';
  document.getElementById('resume-heading').textContent = 'CLI Resume';
  document.getElementById('about-content').innerHTML = `<pre>{\n  "name": "Vijapuram Harshavardhan",\n  "role": "Backend Developer",\n  "location": "Andhra Pradesh",\n  "uptime": "active",\n  "stack": ["Python", "PostgreSQL", "Docker"]\n}</pre>`;
  document.getElementById('projects-content').innerHTML = `<pre>{\n  "MITS-FLEX": {\n    "stack": ["Python", "PostgreSQL", "Docker"],\n    "users": 500,\n    "description": "Student analytics tool"\n  },\n  "EventSync": {\n    "stack": ["Django", "Docker"],\n    "feature": "QR verification"\n  },\n  "EcoGift": {\n    "stack": ["Django", "AWS"],\n    "focus": "eco commerce"\n  },\n  "Carbon Compass": {\n    "stack": ["Django", "AWS"],\n    "goal": "track coal mine emissions"\n  }\n}</pre>`;
  document.getElementById('experience-content').innerHTML = `<pre>[2025-05-30] ✅ deployed EcoGift on AWS\n[2025-04-14] ✅ launched EventSync\n[2024-12-15] 🛠️ migrated Carbon Compass to Django 4.2</pre>`;
  document.getElementById('resume-content').innerHTML = `<pre>> cat resume.txt\n\nVijapuram Harshavardhan\nBackend Developer | DevOps Enthusiast\n\nEducation:\n- B.Tech CSE, MITS (2022–2026), CGPA: 9.24\n\nLanguages: Python, C, Java\nFrameworks: Django, Flask, FastAPI\nDBs: PostgreSQL, MySQL, MongoDB\nCloud: AWS, Firebase\nTools: Git, Docker, VSCode\nInfra: Nginx, Gunicorn\n    </pre>`;
  document.body.style.fontFamily = "'JetBrains Mono', monospace";
}

function switchToUIMode() {
  setDevModeUI(false);
  devMode = false;
  themeStylesheet.setAttribute('href', 'style.css');
  // Show sidebar, hide dev navbar
  document.getElementById('dev-navbar').style.display = 'none';
  document.getElementById('sidebar').style.display = 'flex';
  // Update headings and content for UI mode
  document.getElementById('nav-about').textContent = 'About';
  document.getElementById('nav-projects').textContent = 'Projects';
  document.getElementById('nav-experience').textContent = 'Experience';
  document.getElementById('nav-resume').textContent = 'Resume';
  document.getElementById('about-heading').textContent = 'About Me';
  document.getElementById('projects-heading').textContent = 'Projects';
  document.getElementById('experience-heading').textContent = 'Experience & Achievements';
  document.getElementById('resume-heading').textContent = 'Resume';
  document.getElementById('about-content').innerHTML = `I’m Vijapuram Harshavardhan, a backend-focused engineer from Andhra Pradesh. I build scalable systems, design APIs, and enjoy working deep in the stack with performance and DevOps.`;
  document.getElementById('projects-content').innerHTML = `<div class=\"project-card\"><h3>MITS-FLEX</h3><p>A student performance tracking system used by over 500 students. Built with Python, Docker, and PostgreSQL.</p></div>\n<div class=\"project-card\"><h3>EventSync</h3><p>Automated QR pass system for college events. Streamlines check-ins using Django and PostgreSQL.</p></div>\n<div class=\"project-card\"><h3>EcoGift</h3><p>Sustainable gifting platform with backend built on Django and deployed on AWS.</p></div>\n<div class=\"project-card\"><h3>Carbon Compass</h3><p>Web app for measuring carbon footprints in Indian coal mines, built on Django + AWS.</p></div>`;
  document.getElementById('experience-content').innerHTML = `<ul>\n        <li>Secretary – MITS IEEE Student Branch (2025–26)</li>\n        <li>Coordinator – MITS Web Club (2024–25)</li>\n        <li>SAARTHI – UGC NEP Ambassador (2025)</li>\n        <li>Conference Paper @ IEEE PIICON 2024</li>\n      </ul>`;
  // Resume content remains as is
  document.body.style.fontFamily = "'Inter', sans-serif";
}

// Attach event listeners to both toggle buttons
if (toggleButton) {
  toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!devMode) {
      showDevTransition();
      setTimeout(() => {
        window.open('dev.html', '_blank');
      }, devTransitionDuration);
    } else {
      // If already in dev mode, just open dev.html
      window.open('dev.html', '_blank');
    }
  });
}
if (toggleButtonSidebar) {
  toggleButtonSidebar.addEventListener('click', () => {
    if (!devMode) {
      showDevTransition();
      setTimeout(switchToDevMode, devTransitionDuration);
    } else {
      switchToUIMode();
    }
  });
}
// On load, ensure correct nav is shown
setDevModeUI(false);
