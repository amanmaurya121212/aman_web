/* ==========================================================================
   AMAN KUMAR MAURYA — SUPER SMART AI PORTFOLIO & ADMIN CMS ENGINE (app.js)
   ========================================================================== */

(() => {
  'use strict';

  const STORAGE_KEY = 'aman_portfolio_cms_v1';
  const PIN_STORAGE_KEY = 'aman_portfolio_admin_pin_v2';
  const GITHUB_TOKEN_KEY = 'aman_portfolio_github_token';
  const GITHUB_REPO_KEY = 'aman_portfolio_github_repo';
  const GITHUB_BRANCH_KEY = 'aman_portfolio_github_branch';
  const DATA_FILE_PATH = 'portfolio-data.json';

  /* --------------------------------------------------------------------------
     1. DEFAULT PORTFOLIO DATA (GitHub + CV + Research + Local Workspace)
     -------------------------------------------------------------------------- */
  const DEFAULT_DATA = {
    profile: {
      name: 'Aman Kumar Maurya',
      photoUrl: 'https://avatars.githubusercontent.com/u/185803580?v=4',
      photoTitle: 'Aman Kumar Maurya — AI & Space ML Engineer',
      linkedin: 'https://www.linkedin.com/in/aman12maurya12',
      github: 'https://github.com/amanmaurya121212',
      email: '888amanmaurya@gmail.com',
      phone: '+91-8546075545',
      location: 'Sant Kabir Nagar / Gorakhpur, UP, India',
      bio: 'Department <strong>1st Rank Undergraduate</strong> in Computer Science, Statistics, and Mathematics with strong foundational engineering skills—building core <strong>ML, Deep Learning &amp; Computer Vision systems from scratch</strong> alongside modern <strong>Agentic AI architectures</strong>. Selected presenter at <strong>ISRO – U.R. Rao Satellite Centre (URSC)</strong>. Adept at architecting stateful <strong>Gemini + LangGraph agents</strong>, <strong>100% offline neural voice assistants (JARVIS)</strong>, autonomous <strong>n8n + SQL workflows</strong>, and <strong>ResNet50 / PoseNet CV pipelines</strong>.'
    },
    moments: [
      {
        id: 'moment-rank-1',
        title: '1st Rank in Department — Academic Excellence Award',
        category: '1st Rank Honour',
        date: 'Samman Samaroh • Target Gurukul & DDU GU',
        imageUrl: '',
        icon: 'fa-trophy',
        accent: 'gold',
        description: 'Honoured with the 1st Rank Academic Excellence Trophy ("Where Success is a Tradition" — Samman Samaroh) for achieving 1st Rank in the Department in B.Sc. (Computer Science, Statistics & Mathematics) at Deen Dayal Upadhyaya Gorakhpur University.'
      },
      {
        id: 'moment-isro-ursc',
        title: 'Research Presenter at ISRO – U.R. Rao Satellite Centre (URSC)',
        category: 'ISRO – URSC',
        date: 'Selected & Presented Paper',
        imageUrl: '',
        icon: 'fa-satellite',
        accent: 'cyan',
        description: 'Selected to present original research paper "AI and ML in Space" at ISRO-URSC, investigating deep learning architectures for high-throughput satellite data processing and autonomous space mission operations.'
      },
      {
        id: 'moment-fsi-exhibition',
        title: 'Federated Space Intelligence (FSI) — Orbital AI Prototype & Poster',
        category: 'Space AI Prototype',
        date: 'University Science Exhibition',
        imageUrl: '',
        icon: 'fa-circle-nodes',
        accent: 'violet',
        description: 'Designed and showcased a decentralized orbital machine learning framework enabling collaborative model training across space missions while preserving data privacy and edge computing efficiency.'
      },
      {
        id: 'moment-ai-engineering',
        title: 'Building Real-Time AR & Autonomous AI Systems',
        category: 'Engineering Lab',
        date: 'AI & Computer Vision',
        imageUrl: '',
        icon: 'fa-robot',
        accent: 'emerald',
        description: 'From hand-coding real-time browser AR Iron Man suit overlays with PoseNet to engineering 100% offline neural desktop voice assistants (JARVIS) and LangGraph multi-turn agents.'
      }
    ],
    projects: [
      {
        id: 'proj-jarvis-offline',
        title: 'JARVIS ("Adventure") — Offline Neural Desktop Voice Assistant',
        category: 'cv-voice',
        categoryLabel: 'Voice AI & Systems',
        badge: '100% Offline Neural',
        icon: 'fa-microphone-lines',
        gradient: 'linear-gradient(135deg, #0f172a, #0369a1, #00f2fe)',
        imageUrl: '',
        description: '100% offline, ultra-low-latency desktop voice automation OS powered by a local Kaldi/Vosk acoustic neural wake-word engine ("Adventure"), Per-Monitor DPI-aware Windows UI Automation for sub-pixel input field clicking, SAPI asynchronous TTS, hardware telemetry, and live console HUD.',
        tech: ['Python', 'Vosk Neural STT', 'Windows UIA (DPI-Aware)', 'SAPI TTS', 'Zero Cloud API'],
        github: 'https://github.com/amanmaurya121212',
        live: ''
      },
      {
        id: 'proj-autonomous-agent',
        title: 'Autonomous Personal Task-Automation AI Agent',
        category: 'ai-agents',
        categoryLabel: 'Agentic AI',
        badge: 'Production Stack',
        icon: 'fa-brain',
        gradient: 'linear-gradient(135deg, #1e1b4b, #6d28d9, #a855f7)',
        imageUrl: '',
        description: 'Full-stack personal task-automation AI agent that takes high-level goals in natural language, plans multi-step execution graphs, and invokes extensible tools across Anthropic Claude & OpenAI models with PostgreSQL state, Redis queues, and Qdrant semantic vector memory.',
        tech: ['FastAPI', 'Next.js 14', 'Claude & OpenAI', 'PostgreSQL', 'Redis', 'Qdrant Vector DB', 'Docker'],
        github: 'https://github.com/amanmaurya121212/autonomous-ai-agent',
        live: ''
      },
      {
        id: 'proj-langgraph-chatbot',
        title: 'Stateful LangGraph + Google Gemini AI Chatbot',
        category: 'ai-agents',
        categoryLabel: 'Generative AI',
        badge: 'Persistent Memory',
        icon: 'fa-comments',
        gradient: 'linear-gradient(135deg, #042f2e, #059669, #34d399)',
        imageUrl: '',
        description: 'ChatGPT-style multi-turn conversational agent built with LangGraph and Google Gemini API. Features conditional tool routing (DuckDuckGo web search + calculator), per-thread SQLite checkpoint persistence (SqliteSaver), and dual React (Vite) + Streamlit UIs.',
        tech: ['LangGraph', 'Google Gemini API', 'LangChain', 'FastAPI', 'React (Vite)', 'Streamlit', 'SQLite'],
        github: 'https://github.com/amanmaurya121212/langgraph-ai-chatbot',
        live: ''
      },
      {
        id: 'proj-n8n-sql-agent',
        title: 'Autonomous Web-Search & Chat-with-Database Agent',
        category: 'ai-agents',
        categoryLabel: 'AI Automation',
        badge: 'Text-to-SQL + Web',
        icon: 'fa-database',
        gradient: 'linear-gradient(135deg, #1f2937, #0284c7, #38bdf8)',
        imageUrl: '',
        description: 'Engineered automated multi-step AI agent pipelines in n8n combining real-time web search retrieval with natural-language querying ("Chat with Data/Database") over structured SQL records for instant analytical insights.',
        tech: ['n8n Workflows', 'LLMs', 'SQL Databases', 'Web Search Automation', 'Webhook API'],
        github: 'https://github.com/amanmaurya121212',
        live: ''
      },
      {
        id: 'proj-celebrity-cnn',
        title: '“Celebrity Look-Alike” Facial Recognition Engine',
        category: 'cv-voice',
        categoryLabel: 'Deep Learning CV',
        badge: 'ResNet50 Backbone',
        icon: 'fa-id-badge',
        gradient: 'linear-gradient(135deg, #3b0764, #9333ea, #f43f5e)',
        imageUrl: '',
        description: 'Built an end-to-end facial similarity engine from scratch using a ResNet50 transfer-learning deep CNN backbone trained and evaluated on thousands of facial images across 100+ Bollywood celebrities with high-dimensional feature embedding extraction.',
        tech: ['PyTorch', 'ResNet50', 'Deep CNNs', 'Facial Embeddings', 'Transfer Learning', 'Streamlit'],
        github: 'https://github.com/amanmaurya121212/which_bollywood_celebrity_are-_you',
        live: ''
      },
      {
        id: 'proj-ironman-ar',
        title: 'Become Iron Man — Real-Time AR Full-Body Suit Overlay',
        category: 'cv-voice',
        categoryLabel: 'Real-Time Browser CV',
        badge: 'Live Webcam AR',
        icon: 'fa-mask',
        gradient: 'linear-gradient(135deg, #450a0a, #dc2626, #f59e0b)',
        imageUrl: '',
        description: 'Hand-coded a browser-based real-time computer vision pipeline using p5.js and ml5.js (PoseNet) skeletal keypoint tracking to dynamically scale, rotate, and overlay a full virtual Iron Man suit onto live webcam video streams.',
        tech: ['JavaScript', 'p5.js', 'ml5.js (PoseNet)', 'Real-Time AR', 'Keypoint Geometry'],
        github: 'https://github.com/amanmaurya121212/Become_Ironman',
        live: ''
      },
      {
        id: 'proj-posenet-skeleton',
        title: 'Real-Time 17-Keypoint Human Pose & Skeletal Tracker',
        category: 'cv-voice',
        categoryLabel: 'Computer Vision',
        badge: 'Zero-Server CV',
        icon: 'fa-person-rays',
        gradient: 'linear-gradient(135deg, #0c4a6e, #0284c7, #2dd4bf)',
        imageUrl: '',
        description: 'Browser-native deep learning pose estimation engine capturing live webcam feeds to detect 17 human body keypoints (eyes, shoulders, elbows, wrists, hips, knees, ankles) and compute real-time inter-joint Euclidean kinematics.',
        tech: ['ml5.js (PoseNet)', 'p5.js Canvas', 'JavaScript', 'Euclidean Kinematics', 'HTML5'],
        github: 'https://github.com/amanmaurya121212/realtime-pose-detection',
        live: ''
      },
      {
        id: 'proj-isro-space-ai',
        title: 'ISRO-URSC Research: “AI and ML in Space” & Orbital FSI',
        category: 'research-data',
        categoryLabel: 'Space AI Research',
        badge: 'ISRO – URSC',
        icon: 'fa-satellite',
        gradient: 'linear-gradient(135deg, #090d16, #1d4ed8, #00f2fe)',
        imageUrl: '',
        description: 'Selected research presented at ISRO – U.R. Rao Satellite Centre (URSC) on deep learning for high-throughput satellite data processing and autonomous mission operations, paired with the Federated Space Intelligence (FSI) decentralized orbital learning prototype.',
        tech: ['Deep Learning', 'Federated Learning', 'Satellite Telemetry', 'Orbital Edge AI', 'ISRO-URSC'],
        github: 'https://github.com/amanmaurya121212',
        live: ''
      },
      {
        id: 'proj-tcs-arima',
        title: 'TCS.NS Stock Price Forecasting (Box–Jenkins ARIMA)',
        category: 'research-data',
        categoryLabel: 'Quantitative Statistics',
        badge: '0.27% MAPE',
        icon: 'fa-chart-line',
        gradient: 'linear-gradient(135deg, #064e3b, #059669, #10b981)',
        imageUrl: '',
        description: 'B.Sc. Statistics research applying classical Box–Jenkins ARIMA(1,1,1) modeling on 5 years of daily TCS.NS market prices. Includes ADF stationarity tests, ACF/PACF diagnostics, and automated research report generation, achieving 0.27% MAPE and 100% 95% CI coverage.',
        tech: ['Python', 'statsmodels', 'ARIMA(1,1,1)', 'ADF Test', 'yfinance', 'Statistical Inference'],
        github: 'https://github.com/amanmaurya121212/tcs-arima-forecast',
        live: ''
      },
      {
        id: 'proj-automate-video',
        title: 'AI-Powered Automated Video Generation Pipeline',
        category: 'ai-agents',
        categoryLabel: 'AI Media Automation',
        badge: 'Automated Pipeline',
        icon: 'fa-film',
        gradient: 'linear-gradient(135deg, #311042, #7e22ce, #ec4899)',
        imageUrl: '',
        description: 'Python automation workflow integrating generative AI scripting, voice synthesis, and programmatic media assembly for end-to-end automated video creation.',
        tech: ['Python', 'Generative AI', 'Video Automation', 'Media Processing'],
        github: 'https://github.com/amanmaurya121212/automate-video',
        live: ''
      },
      {
        id: 'proj-mcp-server',
        title: 'Model Context Protocol (MCP) Remote Server',
        category: 'ai-agents',
        categoryLabel: 'LLM Infrastructure',
        badge: 'MCP Protocol',
        icon: 'fa-plug',
        gradient: 'linear-gradient(135deg, #1e293b, #4f46e5, #818cf8)',
        imageUrl: '',
        description: 'Remote server implementation for the Model Context Protocol (MCP) in Python, enabling LLM agents to securely discover and invoke external tools and data sources.',
        tech: ['Python', 'Model Context Protocol (MCP)', 'Agent Tooling', 'PyProject'],
        github: 'https://github.com/amanmaurya121212/MCP_remote_server',
        live: ''
      },
      {
        id: 'proj-nidhi-medical',
        title: 'Nidhi Medical Store — Cyber-Medical Portal & Admin Suite',
        category: 'fullstack',
        categoryLabel: 'Full-Stack Web',
        badge: 'Live on Vercel',
        icon: 'fa-Staff-snake',
        gradient: 'linear-gradient(135deg, #042f2e, #0d9488, #00f2fe)',
        imageUrl: '',
        description: 'High-performance healthcare web portal featuring real-time store open/closed status calculation, WhatsApp prescription photo ordering, live medicine catalog search, clinical vitals showcase, Google Maps navigation, and PIN-protected Owner Admin Dashboard.',
        tech: ['HTML5 & CSS3', 'Vanilla JS', 'WhatsApp Order Engine', 'LocalStorage CMS', 'Vercel'],
        github: 'https://github.com/amanmaurya121212/medical_shop',
        live: 'https://nidhimedicalstore.vercel.app'
      },
      {
        id: 'proj-movie-ticket',
        title: 'Online Movie Ticket Booking System (Multi-Role)',
        category: 'fullstack',
        categoryLabel: 'Enterprise Full-Stack',
        badge: 'Spring Boot + React',
        icon: 'fa-ticket',
        gradient: 'linear-gradient(135deg, #31102f, #be123c, #fb7185)',
        imageUrl: '',
        description: 'Full-stack role-based platform supporting ADMIN, THEATER Manager, and CUSTOMER workflows. Features theater approval, screen & show scheduling, interactive seat map selection (Regular, Premium, Gold), and an integrated digital wallet.',
        tech: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'React (Vite)', 'SQLite', 'Bootstrap 5'],
        github: 'https://github.com/amanmaurya121212/Online_Movie_Ticket_book-',
        live: ''
      },
      {
        id: 'proj-mastermind-hackathon',
        title: 'Mastermind — Social-Impact Community App with AI ChatBox',
        category: 'fullstack',
        categoryLabel: 'Hackathon Platform',
        badge: 'n8n AI ChatBox',
        icon: 'fa-hands-holding-circle',
        gradient: 'linear-gradient(135deg, #1e1b4b, #2563eb, #38bdf8)',
        imageUrl: '',
        description: 'Hackathon social-impact web platform connecting volunteers with community opportunities and services, featuring an embedded conversational AI ChatBox powered by an n8n webhook workflow.',
        tech: ['HTML5', 'JavaScript', 'Tailwind CSS', 'n8n Webhook AI', 'Lucide Icons'],
        github: 'https://github.com/amanmaurya121212/hackathon-web-mastermind',
        live: ''
      },
      {
        id: 'proj-shoe-shop-web',
        title: 'Modern Footwear E-Commerce Storefront & Web Utilities',
        category: 'fullstack',
        categoryLabel: 'Frontend Engineering',
        badge: 'Live on Vercel',
        icon: 'fa-bag-shopping',
        gradient: 'linear-gradient(135deg, #18181b, #ea580c, #facc15)',
        imageUrl: '',
        description: 'Responsive React + Vite e-commerce storefront deployed on Vercel alongside interactive web applications including Magic Calculator and Spotify UI clones.',
        tech: ['React 18', 'Vite', 'JavaScript', 'Responsive CSS', 'Vercel'],
        github: 'https://github.com/amanmaurya121212/shoe_shop_test',
        live: 'https://shoe-shop-test.vercel.app'
      }
    ]
  };

  /* --------------------------------------------------------------------------
     2. STATE MANAGEMENT, GITHUB CLOUD SYNC & STORAGE HELPERS
     -------------------------------------------------------------------------- */
  let state = loadState();
  let activeCategory = 'all';
  let searchQuery = '';
  let adminUnlocked = false;
  let pendingMomentImgData = '';
  let pendingProfileImgData = '';
  let pendingProjectImgData = '';

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_DATA);
      const parsed = JSON.parse(raw);
      return {
        updatedAt: parsed.updatedAt || 0,
        profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
        moments: Array.isArray(parsed.moments) && parsed.moments.length ? parsed.moments : structuredClone(DEFAULT_DATA.moments),
        projects: Array.isArray(parsed.projects) && parsed.projects.length ? parsed.projects : structuredClone(DEFAULT_DATA.projects)
      };
    } catch (e) {
      console.warn('Failed to parse portfolio state, using defaults:', e);
      return structuredClone(DEFAULT_DATA);
    }
  }

  function saveState() {
    try {
      state.updatedAt = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      showToast('Storage limit reached! Try uploading a smaller image.');
    }
  }

  function getAdminPin() {
    return localStorage.getItem(PIN_STORAGE_KEY) || '113114';
  }

  function setAdminPin(newPin) {
    localStorage.setItem(PIN_STORAGE_KEY, newPin);
  }

  function getGitHubConfig() {
    return {
      token: localStorage.getItem(GITHUB_TOKEN_KEY) || '',
      repo: localStorage.getItem(GITHUB_REPO_KEY) || 'amanmaurya121212/aman_web',
      branch: localStorage.getItem(GITHUB_BRANCH_KEY) || 'main'
    };
  }

  function setGitHubConfig(token, repo, branch) {
    if (token !== undefined) localStorage.setItem(GITHUB_TOKEN_KEY, token.trim());
    if (repo !== undefined) localStorage.setItem(GITHUB_REPO_KEY, repo.trim());
    if (branch !== undefined) localStorage.setItem(GITHUB_BRANCH_KEY, branch.trim());
    updateCloudStatusUI();
  }

  function updateCloudStatusUI() {
    const cfg = getGitHubConfig();
    const dot = document.getElementById('cloudStatusDot');
    const title = document.getElementById('cloudStatusTitle');
    const sub = document.getElementById('cloudStatusSub');
    if (!dot || !title || !sub) return;

    if (cfg.token) {
      dot.className = 'cloud-dot connected';
      title.textContent = 'Cloud Sync: Connected to GitHub (' + cfg.repo + ')';
      sub.textContent = 'Photos & edits uploaded on your phone automatically save to GitHub and show on all devices!';
    } else {
      dot.className = 'cloud-dot';
      title.textContent = 'Cloud Sync: Setup Required for Multi-Device Photos';
      sub.textContent = 'Paste your GitHub Token once in Tab 4 so photos uploaded on your phone show on ALL phones & laptops.';
    }
  }

  async function fetchRemoteData() {
    try {
      const cfg = getGitHubConfig();
      // 1. Try local/deployed portfolio-data.json
      let res = await fetch(`portfolio-data.json?t=${Date.now()}`).catch(() => null);

      // 2. Fallback to GitHub raw if deployed file is older or not yet regenerated
      if (!res || !res.ok) {
        const rawUrl = `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch}/${DATA_FILE_PATH}?t=${Date.now()}`;
        res = await fetch(rawUrl).catch(() => null);
      }

      if (res && res.ok) {
        const remote = await res.json();
        if (remote && remote.profile && Array.isArray(remote.moments)) {
          const localUpdated = state.updatedAt || 0;
          const remoteUpdated = remote.updatedAt || 0;
          if (remoteUpdated >= localUpdated || !state.updatedAt) {
            state = {
              updatedAt: remoteUpdated,
              profile: { ...DEFAULT_DATA.profile, ...(remote.profile || {}) },
              moments: remote.moments.length ? remote.moments : structuredClone(DEFAULT_DATA.moments),
              projects: remote.projects.length ? remote.projects : structuredClone(DEFAULT_DATA.projects)
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            renderProfile();
            renderProjects();
            renderMoments();
          }
        }
      }
    } catch (e) {
      console.warn('Remote sync check:', e);
    }
  }

  async function publishToGitHub(isAutomated = false) {
    const cfg = getGitHubConfig();
    const dot = document.getElementById('cloudStatusDot');
    const syncBtnText = document.getElementById('syncNowBtnText');
    const title = document.getElementById('cloudStatusTitle');
    const sub = document.getElementById('cloudStatusSub');

    if (!cfg.token) {
      if (!isAutomated) {
        showToast('Please add your GitHub Token in Tab 4 first!');
        switchAdminTab('tab-backup');
      }
      return false;
    }

    try {
      if (dot) dot.className = 'cloud-dot syncing';
      if (syncBtnText) syncBtnText.textContent = 'Publishing to Cloud...';
      if (title) title.textContent = 'Publishing changes to GitHub...';

      // 1. Get current remote file SHA
      const apiUrl = `https://api.github.com/repos/${cfg.repo}/contents/${DATA_FILE_PATH}?ref=${cfg.branch}`;
      let sha = null;
      try {
        const getRes = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${cfg.token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (getRes.ok) {
          const fileData = await getRes.json();
          sha = fileData.sha;
        }
      } catch (e) {
        console.warn('Could not fetch existing file SHA:', e);
      }

      // 2. Prepare payload
      state.updatedAt = Date.now();
      const contentStr = JSON.stringify(state, null, 2);
      // UTF-8 safe base64 encoding
      const base64Content = btoa(unescape(encodeURIComponent(contentStr)));

      const putBody = {
        message: `Update portfolio photos & content via Phone Admin [${new Date().toLocaleTimeString()}]`,
        content: base64Content,
        branch: cfg.branch
      };
      if (sha) putBody.sha = sha;

      const putRes = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${cfg.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(putBody)
      });

      if (!putRes.ok) {
        const errJson = await putRes.json().catch(() => ({}));
        throw new Error(errJson.message || `GitHub error ${putRes.status}`);
      }

      if (dot) dot.className = 'cloud-dot connected';
      if (syncBtnText) syncBtnText.textContent = 'Publish to All Devices';
      if (title) title.textContent = 'Cloud Sync: Live & Synced globally ✓';
      if (sub) sub.textContent = `Published at ${new Date().toLocaleTimeString()}! Photos are now live on every phone & device.`;
      showToast('✅ Published! Photos will now show on ALL phones & devices.');
      return true;
    } catch (err) {
      console.error('Publish error:', err);
      if (dot) dot.className = 'cloud-dot';
      if (syncBtnText) syncBtnText.textContent = 'Publish to All Devices';
      if (title) title.textContent = 'Publish Error';
      if (sub) sub.textContent = err.message || 'Check your GitHub token';
      showToast(`Cloud Sync: ${err.message || 'Check token in Tab 4'}`);
      return false;
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3600);
  }

  /* --------------------------------------------------------------------------
     3. CLIENT-SIDE IMAGE COMPRESSION (OPTIMIZED FOR MOBILE PHONE PHOTOS)
     -------------------------------------------------------------------------- */
  function compressImageFile(file, maxWidth = 960, quality = 0.78) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        reject(new Error('Please select a valid image file.'));
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = ev.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /* --------------------------------------------------------------------------
     4. RENDER PROFILE, PROJECTS & MOMENTS GALLERY
     -------------------------------------------------------------------------- */
  function renderProfile() {
    const p = state.profile;
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    };

    setTxt('heroName', p.name);
    setTxt('navBrandName', p.name.split(' ').slice(0, 2).join(' ') || p.name);
    setTxt('heroPhotoTitle', p.photoTitle);
    setHtml('heroLocationText', `<i class="fa-solid fa-location-dot"></i> ${escapeHtml(p.location)}`);
    setHtml('heroBio', p.bio);

    const heroImg = document.getElementById('heroProfileImg');
    if (heroImg && p.photoUrl) {
      heroImg.src = p.photoUrl;
    }

    // Update social & contact links
    const ghLink = document.getElementById('heroGithubLink');
    if (ghLink) {
      ghLink.href = p.github;
      ghLink.querySelector('span').textContent = p.github.replace(/^https?:\/\/(www\.)?/, '');
    }
    const liLink = document.getElementById('heroLinkedinLink');
    if (liLink) {
      liLink.href = p.linkedin;
      liLink.querySelector('span').textContent = p.linkedin.replace(/^https?:\/\/(www\.)?/, '');
    }
    const emLink = document.getElementById('heroEmailLink');
    if (emLink) {
      emLink.href = `mailto:${p.email}`;
      emLink.querySelector('span').textContent = p.email;
    }

    // Contact cards
    const cEmail = document.getElementById('contactEmailCard');
    if (cEmail) {
      cEmail.href = `mailto:${p.email}`;
      setTxt('contactEmailText', p.email);
    }
    const cLi = document.getElementById('contactLinkedinCard');
    if (cLi) {
      cLi.href = p.linkedin;
      setTxt('contactLinkedinText', p.linkedin.replace(/^https?:\/\/(www\.)?/, ''));
    }
    const cGh = document.getElementById('contactGithubCard');
    if (cGh) {
      cGh.href = p.github;
      setTxt('contactGithubText', p.github.replace(/^https?:\/\/(www\.)?/, ''));
    }
    const cPh = document.getElementById('contactPhoneCard');
    if (cPh) {
      cPh.href = `tel:${p.phone.replace(/\s+/g, '')}`;
      setTxt('contactPhoneText', p.phone);
    }

    // Sync Updated CV Modal fields
    setTxt('cvDocName', p.name.toUpperCase());
    setTxt('cvDocPhone', p.phone);
    setTxt('cvDocEmail', p.email);
    setTxt('cvDocLocation', p.location);
    const cvLi = document.getElementById('cvDocLinkedin');
    if (cvLi) {
      cvLi.href = p.linkedin;
      cvLi.textContent = p.linkedin.replace(/^https?:\/\/(www\.)?/, '');
    }
  }

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const totalCount = state.projects.length;
    const navBadge = document.getElementById('navProjectCount');
    const countAll = document.getElementById('countAll');
    if (navBadge) navBadge.textContent = totalCount;
    if (countAll) countAll.textContent = totalCount;

    const filtered = state.projects.filter((proj) => {
      const matchesCat = activeCategory === 'all' || proj.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;
      const hay = `${proj.title} ${proj.description} ${(proj.tech || []).join(' ')} ${proj.categoryLabel || ''}`.toLowerCase();
      return matchesCat && hay.includes(q);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="bento-card" style="grid-column: 1 / -1; text-align: center; padding: 48px;">
          <h3>No matching projects found</h3>
          <p>Try clearing the search box or switching category tabs.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((proj) => {
      const hasImg = proj.imageUrl && proj.imageUrl.trim() !== '';
      const bannerStyle = hasImg ? '' : `style="background: ${proj.gradient || 'linear-gradient(135deg, #0f172a, #1e3a8a)'}"`;
      const iconClass = proj.icon || 'fa-cube';
      const techTagsHtml = (proj.tech || []).map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

      return `
        <article class="project-card reveal-up revealed" data-tilt-card>
          <div class="project-visual-banner" ${bannerStyle}>
            ${
              hasImg
                ? `<img src="${escapeAttr(proj.imageUrl)}" alt="${escapeAttr(proj.title)}" loading="lazy" />`
                : `<div class="project-banner-art">
                     <i class="fa-solid ${escapeAttr(iconClass)}"></i>
                     <span class="banner-code-label">${escapeHtml(proj.categoryLabel || 'AI / ENGINEERING')}</span>
                   </div>`
            }
            <div class="project-top-badges">
              <span class="proj-cat-pill">${escapeHtml(proj.categoryLabel || proj.category)}</span>
              ${proj.badge ? `<span class="proj-status-pill">${escapeHtml(proj.badge)}</span>` : ''}
            </div>
          </div>

          <div class="project-body">
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
            <p class="project-desc">${escapeHtml(proj.description)}</p>
            <div class="project-tech-stack">${techTagsHtml}</div>

            <div class="project-footer">
              ${
                proj.github
                  ? `<a href="${escapeAttr(proj.github)}" target="_blank" rel="noopener noreferrer" class="proj-link-btn">
                       <i class="fa-brands fa-github"></i> <span>Source Code</span> <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7rem"></i>
                     </a>`
                  : `<span></span>`
              }
              ${
                proj.live
                  ? `<a href="${escapeAttr(proj.live)}" target="_blank" rel="noopener noreferrer" class="proj-live-btn">
                       <i class="fa-solid fa-globe"></i> <span>Live Demo</span>
                     </a>`
                  : ''
              }
            </div>
          </div>
        </article>
      `;
    }).join('');

    initTiltCards();
  }

  function renderMoments() {
    const grid = document.getElementById('momentsGrid');
    if (!grid) return;

    grid.innerHTML = state.moments.map((m) => {
      const hasImg = m.imageUrl && m.imageUrl.trim() !== '';
      const iconClass = m.icon || 'fa-award';

      return `
        <article class="moment-card reveal-up revealed" data-tilt-card>
          <div class="moment-media" data-moment-id="${escapeAttr(m.id)}">
            ${
              hasImg
                ? `<img src="${escapeAttr(m.imageUrl)}" alt="${escapeAttr(m.title)}" loading="lazy" />`
                : `<div class="moment-placeholder-art">
                     <i class="fa-solid ${escapeAttr(iconClass)}"></i>
                     <span>Click "Upload / Edit Photo" to attach your photo here</span>
                   </div>`
            }
            <button type="button" class="moment-edit-chip" data-edit-moment="${escapeAttr(m.id)}" title="Upload photo or edit title in Admin Dashboard">
              <i class="fa-solid fa-camera"></i>
              <span>${hasImg ? 'Edit Photo / Title' : 'Upload Photo'}</span>
            </button>
          </div>

          <div class="moment-content">
            <div class="moment-meta">
              <span class="moment-badge">${escapeHtml(m.category || 'Milestone')}</span>
              <span class="moment-date">${escapeHtml(m.date || '')}</span>
            </div>
            <h3 class="moment-title">${escapeHtml(m.title)}</h3>
            <p class="moment-desc">${escapeHtml(m.description || '')}</p>
          </div>
        </article>
      `;
    }).join('');

    // Wire lightbox click on media & edit button click
    grid.querySelectorAll('.moment-edit-chip').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-edit-moment');
        openAdminModal('tab-photos', () => loadMomentIntoForm(id));
      });
    });

    grid.querySelectorAll('.moment-media').forEach((media) => {
      media.addEventListener('click', () => {
        const id = media.getAttribute('data-moment-id');
        const item = state.moments.find((x) => x.id === id);
        if (!item) return;
        if (item.imageUrl) {
          openLightbox(item);
        } else {
          openAdminModal('tab-photos', () => loadMomentIntoForm(id));
        }
      });
    });

    initTiltCards();
  }

  /* --------------------------------------------------------------------------
     5. ADMIN DASHBOARD LOGIC (PHOTOS, PROFILE, PROJECTS, BACKUP)
     -------------------------------------------------------------------------- */
  const adminModalBackdrop = document.getElementById('adminModalBackdrop');
  const adminPinScreen = document.getElementById('adminPinScreen');
  const adminDashboardBody = document.getElementById('adminDashboardBody');
  let postUnlockCallback = null;

  function openAdminModal(targetTab = 'tab-photos', callback = null) {
    postUnlockCallback = callback;
    adminModalBackdrop.classList.add('open');
    adminModalBackdrop.setAttribute('aria-hidden', 'false');

    if (adminUnlocked) {
      adminPinScreen.hidden = true;
      adminDashboardBody.hidden = false;
      switchAdminTab(targetTab);
      populateAdminForms();
      if (typeof postUnlockCallback === 'function') {
        postUnlockCallback();
        postUnlockCallback = null;
      }
    } else {
      adminPinScreen.hidden = false;
      adminDashboardBody.hidden = true;
      const pinInput = document.getElementById('adminPinInput');
      if (pinInput) {
        pinInput.value = '';
        setTimeout(() => pinInput.focus(), 80);
      }
    }
  }

  function closeAdminModal() {
    adminModalBackdrop.classList.remove('open');
    adminModalBackdrop.setAttribute('aria-hidden', 'true');
  }

  function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach((t) => {
      t.classList.toggle('active', t.getAttribute('data-admin-tab') === tabId);
    });
    document.querySelectorAll('.admin-tab-pane').forEach((p) => {
      p.classList.toggle('active', p.id === tabId);
    });
  }

  function populateAdminForms() {
    // 0. Update Cloud Sync status & inputs
    const cfg = getGitHubConfig();
    const tokenIn = document.getElementById('githubTokenInput');
    const repoIn = document.getElementById('githubRepoInput');
    const branchIn = document.getElementById('githubBranchInput');
    if (tokenIn) tokenIn.value = cfg.token;
    if (repoIn) repoIn.value = cfg.repo;
    if (branchIn) branchIn.value = cfg.branch;
    updateCloudStatusUI();

    // 1. Profile form
    const p = state.profile;
    document.getElementById('adminProfilePreview').src = p.photoUrl || 'https://avatars.githubusercontent.com/u/185803580?v=4';
    document.getElementById('profilePhotoUrlInput').value = p.photoUrl.startsWith('data:') ? '' : p.photoUrl;
    document.getElementById('adminHeroName').value = p.name;
    document.getElementById('adminPhotoTitle').value = p.photoTitle;
    document.getElementById('adminLinkedin').value = p.linkedin;
    document.getElementById('adminGithub').value = p.github;
    document.getElementById('adminEmail').value = p.email;
    document.getElementById('adminPhone').value = p.phone;
    document.getElementById('adminLocation').value = p.location;
    document.getElementById('adminBio').value = p.bio;

    // 2. Moments list
    const momentsList = document.getElementById('adminMomentsList');
    if (momentsList) {
      momentsList.innerHTML = state.moments.map((m) => `
        <div class="admin-item-row">
          <div class="admin-item-info">
            ${
              m.imageUrl
                ? `<img src="${escapeAttr(m.imageUrl)}" class="admin-item-thumb" alt="" />`
                : `<div class="admin-item-thumb"><i class="fa-solid ${escapeAttr(m.icon || 'fa-image')}"></i></div>`
            }
            <div>
              <strong>${escapeHtml(m.title)}</strong>
              <span>${escapeHtml(m.category || '')} • ${m.imageUrl ? '✅ Photo Uploaded' : '📷 Waiting for photo'}</span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button type="button" class="btn-xs" data-admin-edit-moment="${escapeAttr(m.id)}"><i class="fa-solid fa-pen-to-square"></i> Edit / Change Photo</button>
            <button type="button" class="btn-xs btn-danger" data-admin-del-moment="${escapeAttr(m.id)}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `).join('');

      momentsList.querySelectorAll('[data-admin-edit-moment]').forEach((btn) => {
        btn.addEventListener('click', () => loadMomentIntoForm(btn.getAttribute('data-admin-edit-moment')));
      });
      momentsList.querySelectorAll('[data-admin-del-moment]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-admin-del-moment');
          state.moments = state.moments.filter((x) => x.id !== id);
          saveState();
          renderMoments();
          populateAdminForms();
          showToast('Photo card removed.');
          await publishToGitHub(true);
        });
      });
    }

    // 3. Projects list
    const projectsList = document.getElementById('adminProjectsList');
    if (projectsList) {
      projectsList.innerHTML = state.projects.map((pr) => `
        <div class="admin-item-row">
          <div class="admin-item-info">
            <div class="admin-item-thumb"><i class="fa-solid ${escapeAttr(pr.icon || 'fa-code')}"></i></div>
            <div>
              <strong>${escapeHtml(pr.title)}</strong>
              <span>${escapeHtml(pr.categoryLabel || pr.category)}</span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button type="button" class="btn-xs" data-admin-edit-proj="${escapeAttr(pr.id)}">Edit</button>
            <button type="button" class="btn-xs btn-danger" data-admin-del-proj="${escapeAttr(pr.id)}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `).join('');

      projectsList.querySelectorAll('[data-admin-edit-proj]').forEach((btn) => {
        btn.addEventListener('click', () => loadProjectIntoForm(btn.getAttribute('data-admin-edit-proj')));
      });
      projectsList.querySelectorAll('[data-admin-del-proj]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-admin-del-proj');
          state.projects = state.projects.filter((x) => x.id !== id);
          saveState();
          renderProjects();
          populateAdminForms();
          showToast('Project removed.');
          await publishToGitHub(true);
        });
      });
    }
  }

  function loadMomentIntoForm(id) {
    const item = state.moments.find((x) => x.id === id);
    if (!item) return;
    document.getElementById('momentEditId').value = item.id;
    document.getElementById('momentTitleInput').value = item.title;
    document.getElementById('momentCategoryInput').value = item.category || '';
    document.getElementById('momentDateInput').value = item.date || '';
    document.getElementById('momentDescInput').value = item.description || '';
    document.getElementById('momentImageUrlInput').value = item.imageUrl && !item.imageUrl.startsWith('data:') ? item.imageUrl : '';
    pendingMomentImgData = item.imageUrl || '';

    const previewWrap = document.getElementById('momentPreviewWrap');
    const previewImg = document.getElementById('momentPreviewImg');
    const dropzoneText = document.getElementById('momentDropzoneText');
    const editPill = document.getElementById('momentEditingPill');

    if (editPill) editPill.hidden = false;

    if (pendingMomentImgData) {
      previewImg.src = pendingMomentImgData;
      previewWrap.hidden = false;
      if (dropzoneText) dropzoneText.textContent = 'Tap here to REPLACE existing photo with a new one';
    } else {
      previewWrap.hidden = true;
      if (dropzoneText) dropzoneText.textContent = 'Tap to choose photo from Phone Gallery / Camera';
    }

    document.getElementById('momentFormHeading').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Editing: ${escapeHtml(item.title)}`;
    document.getElementById('momentSaveBtnText').textContent = 'Save & Publish Changes';
    document.getElementById('momentTitleInput').focus();
  }

  function resetMomentForm() {
    document.getElementById('momentPhotoForm').reset();
    document.getElementById('momentEditId').value = '';
    pendingMomentImgData = '';
    document.getElementById('momentPreviewWrap').hidden = true;
    const editPill = document.getElementById('momentEditingPill');
    if (editPill) editPill.hidden = true;
    const dropzoneText = document.getElementById('momentDropzoneText');
    if (dropzoneText) dropzoneText.textContent = 'Tap here to choose or replace photo from Phone Gallery';
    document.getElementById('momentFormHeading').innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Add / Edit Photo &amp; Title`;
    document.getElementById('momentSaveBtnText').textContent = 'Save & Publish Photo';
  }

  function loadProjectIntoForm(id) {
    const proj = state.projects.find((x) => x.id === id);
    if (!proj) return;
    document.getElementById('projectEditId').value = proj.id;
    document.getElementById('projTitleInput').value = proj.title;
    document.getElementById('projCatInput').value = proj.category;
    document.getElementById('projBadgeInput').value = proj.badge || '';
    document.getElementById('projDescInput').value = proj.description;
    document.getElementById('projTechInput').value = (proj.tech || []).join(', ');
    document.getElementById('projGithubInput').value = proj.github || '';
    document.getElementById('projLiveInput').value = proj.live || '';
    pendingProjectImgData = proj.imageUrl || '';
    document.getElementById('projectFormHeading').innerHTML = `<i class="fa-solid fa-pen"></i> Edit Project`;
  }

  function resetProjectForm() {
    document.getElementById('projectAdminForm').reset();
    document.getElementById('projectEditId').value = '';
    pendingProjectImgData = '';
    document.getElementById('projectFormHeading').innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add / Edit Project`;
  }

  /* --------------------------------------------------------------------------
     6. LIGHTBOX FOR FULLSCREEN PHOTO VIEWING
     -------------------------------------------------------------------------- */
  function openLightbox(item) {
    const lb = document.getElementById('lightboxBackdrop');
    document.getElementById('lightboxImg').src = item.imageUrl;
    document.getElementById('lightboxBadge').textContent = item.category || 'Milestone';
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxDesc').textContent = item.description || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  }

  /* --------------------------------------------------------------------------
     7. INTERACTIVE 3D NEURAL / ORBITAL MOVEMENT CANVAS (#neuralCanvas)
     -------------------------------------------------------------------------- */
  function initNeuralCanvas() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const modes = ['Neural Orbit', 'Deep Space Starfield', 'Cyber Flow'];
    let modeIndex = 0;

    const mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0, active: false };
    let lastMouse = { x: width / 2, y: height / 2 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.vx = e.clientX - lastMouse.x;
      mouse.vy = e.clientY - lastMouse.y;
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    // Click burst particles
    const burstParticles = [];
    window.addEventListener('click', (e) => {
      const colors = ['#00f2fe', '#8b5cf6', '#10b981', '#f59e0b'];
      for (let i = 0; i < 14; i++) {
        const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.3;
        const speed = 1.8 + Math.random() * 3.6;
        burstParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2 + Math.random() * 2.5,
          alpha: 1,
          color: colors[i % colors.length]
        });
      }
    });

    // Create neural nodes
    const nodeCount = Math.min(72, Math.floor((width * height) / 18000));
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      r: 1.5 + Math.random() * 2.2,
      hue: i % 3 === 0 ? '#00f2fe' : i % 3 === 1 ? '#8b5cf6' : '#10b981',
      orbitAngle: Math.random() * Math.PI * 2,
      orbitSpeed: 0.003 + Math.random() * 0.006
    }));

    const modeBtn = document.getElementById('motionModeBtn');
    const modeLabel = document.getElementById('motionModeLabel');
    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        modeIndex = (modeIndex + 1) % modes.length;
        if (modeLabel) modeLabel.textContent = `Motion: ${modes[modeIndex]}`;
        showToast(`Switched animation mode to: ${modes[modeIndex]}`);
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital ring around cursor in Neural Orbit mode
      if (mouse.active && modeIndex === 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 95, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.09)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (modeIndex === 0) {
          // Neural Orbit
          n.x += n.vx;
          n.y += n.vy;
        } else if (modeIndex === 1) {
          // Deep Space Starfield
          n.orbitAngle += n.orbitSpeed;
          n.x += Math.cos(n.orbitAngle) * 0.6 + (mouse.x - width / 2) * 0.0008;
          n.y += Math.sin(n.orbitAngle) * 0.6 + (mouse.y - height / 2) * 0.0008;
        } else {
          // Cyber Flow
          n.x += Math.abs(n.vx) + 0.6;
          n.y += Math.sin(n.x * 0.01) * 0.5;
        }

        // Wrap / bounce edges
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Cursor interactive magnetic attraction/repulsion
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170 && dist > 1) {
          const force = (170 - dist) / 170;
          n.x -= (dx / dist) * force * 1.1;
          n.y -= (dy / dist) * force * 1.1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.hue;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const d = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (d < 135) {
            const alpha = (1 - d / 135) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update & draw click burst particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.alpha -= 0.024;
        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = bp.alpha;
        ctx.beginPath();
        ctx.arc(bp.x, bp.y, bp.radius, 0, Math.PI * 2);
        ctx.fillStyle = bp.color;
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* --------------------------------------------------------------------------
     8. 3D PERSPECTIVE TILT CARDS & MAGNETIC CURSOR
     -------------------------------------------------------------------------- */
  function initTiltCards() {
    const cards = document.querySelectorAll('[data-tilt-card]');
    cards.forEach((card) => {
      if (card._tiltBound) return;
      card._tiltBound = true;

      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -5.5;
        const rotateY = ((x - cx) / cx) * 5.5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initCustomCursorAndMagnetic() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(renderRing);
    }
    renderRing();

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, select, textarea, .moment-media')) {
        ring.classList.add('cursor-hover');
      } else {
        ring.classList.remove('cursor-hover');
      }
    });

    // Magnetic pull on [data-magnetic] elements
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.18).toFixed(1)}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
     9. TYPEWRITER HERO ANIMATION & ORBITAL FEDERATED SIMULATOR
     -------------------------------------------------------------------------- */
  function initTypewriter() {
    const el = document.getElementById('typewriterText');
    if (!el) return;
    const phrases = [
      'AI & Machine Learning Engineer',
      'ISRO – URSC Selected Research Presenter',
      'Department 1st Rank Awardee',
      'LangGraph & Google Gemini Agent Architect',
      'Deep Learning & Computer Vision Builder',
      'Creator of JARVIS Offline Neural Voice OS'
    ];
    let pIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const current = phrases[pIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 2100);
          return;
        }
        setTimeout(tick, 48);
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(tick, 320);
          return;
        }
        setTimeout(tick, 24);
      }
    }
    setTimeout(tick, 1200);
  }

  function initOrbitalSimulator() {
    const btn = document.getElementById('triggerOrbitalSyncBtn');
    const visual = document.getElementById('orbitalNodesVisual');
    const roundTxt = document.getElementById('orbitalRoundText');
    let round = 1;
    if (!btn || !visual) return;

    btn.addEventListener('click', () => {
      visual.classList.add('syncing');
      if (roundTxt) roundTxt.textContent = `Aggregating Round #${round}...`;
      setTimeout(() => {
        visual.classList.remove('syncing');
        if (roundTxt) roundTxt.textContent = `Global Model v1.${round} Synced ✓`;
        round++;
      }, 950);
    });
  }

  /* --------------------------------------------------------------------------
     10. "ASK AMAN'S AI" SMART PORTFOLIO ASSISTANT
     -------------------------------------------------------------------------- */
  function initAiAssistant() {
    const fab = document.getElementById('aiFabBtn');
    const panel = document.getElementById('aiChatPanel');
    const closeBtn = document.getElementById('closeAiChatBtn');
    const form = document.getElementById('aiChatForm');
    const input = document.getElementById('aiChatInput');
    const messages = document.getElementById('aiChatMessages');
    const chips = document.querySelectorAll('.ai-chip');

    if (!fab || !panel) return;

    fab.addEventListener('click', () => {
      panel.classList.toggle('open');
      if (panel.classList.contains('open')) {
        setTimeout(() => input && input.focus(), 100);
      }
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.remove('open');
    });

    function appendMessage(html, isUser = false) {
      const div = document.createElement('div');
      div.className = `ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-bot'}`;
      div.innerHTML = html;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function generateBotReply(q) {
      const s = q.toLowerCase();
      if (s.includes('isro') || s.includes('space') || s.includes('ursc') || s.includes('federated') || s.includes('fsi')) {
        return `🛰️ <strong>Space AI & ISRO Research:</strong> Aman was selected to present his original research paper <em>"AI and ML in Space"</em> at <strong>ISRO – U.R. Rao Satellite Centre (URSC)</strong>, focusing on deep learning for high-throughput satellite data and autonomous space operations. He also prototyped <strong>Federated Space Intelligence (FSI)</strong> for privacy-preserving orbital model training!`;
      }
      if (s.includes('jarvis') || s.includes('voice') || s.includes('offline') || s.includes('adventure')) {
        return `🎙️ <strong>JARVIS ("Adventure"):</strong> Aman built a <strong>100% offline desktop voice assistant</strong> using a local Kaldi/Vosk neural acoustic model and Per-Monitor DPI-aware Windows UI Automation to click input fields at sub-pixel precision, control media/windows, and speak hardware telemetry via SAPI TTS with zero cloud cost!`;
      }
      if (s.includes('agent') || s.includes('langgraph') || s.includes('gemini') || s.includes('n8n') || s.includes('mcp')) {
        return `🤖 <strong>Agentic AI Systems:</strong> Aman has built:<br>• <strong>Autonomous AI Agent:</strong> FastAPI + Next.js 14 + Claude/OpenAI + Qdrant vector memory + Postgres/Redis.<br>• <strong>Stateful LangGraph + Gemini Chatbot:</strong> Persistent SQLite thread memory, web search & calculator tools, React + Streamlit UIs.<br>• <strong>n8n Text-to-SQL & Web Search Agent</strong> + <strong>MCP Remote Server</strong>.`;
      }
      if (s.includes('vision') || s.includes('cv') || s.includes('iron') || s.includes('celebrity') || s.includes('resnet') || s.includes('pose')) {
        return `👁️ <strong>Computer Vision & Deep Learning:</strong> Aman hand-coded a <strong>ResNet50 Facial Similarity Engine</strong> trained on 100+ Bollywood celebrities in PyTorch, and a browser-based <strong>Real-Time AR Iron Man Suit overlay</strong> using <code>p5.js</code> & <code>ml5.js (PoseNet)</code> 17-keypoint skeletal tracking!`;
      }
      if (s.includes('rank') || s.includes('education') || s.includes('university') || s.includes('degree') || s.includes('arima') || s.includes('stat')) {
        return `🏆 <strong>Academic Distinction:</strong> Aman is ranked <strong>1st in his Department</strong> (Academic Excellence Awardee) in B.Sc. Computer Science, Statistics & Mathematics at DDU Gorakhpur University. His TCS.NS ARIMA(1,1,1) statistical research achieved <strong>0.27% MAPE</strong>!`;
      }
      if (s.includes('contact') || s.includes('hire') || s.includes('email') || s.includes('phone') || s.includes('linkedin')) {
        return `📬 <strong>Connect with Aman:</strong><br>• <strong>Email:</strong> <a href="mailto:${escapeAttr(state.profile.email)}" style="color:var(--accent-cyan)">${escapeHtml(state.profile.email)}</a><br>• <strong>Phone/WhatsApp:</strong> ${escapeHtml(state.profile.phone)}<br>• <strong>LinkedIn:</strong> <a href="${escapeAttr(state.profile.linkedin)}" target="_blank" style="color:var(--accent-cyan)">linkedin.com/in/aman12maurya12</a>`;
      }
      return `✨ Aman Kumar Maurya is an <strong>AI & Machine Learning Engineer</strong>, <strong>ISRO-URSC Research Presenter</strong>, and <strong>Department 1st Rank Holder</strong> with <strong>${state.projects.length} projects</strong> across Agentic AI (LangGraph, Gemini, FastAPI, Qdrant), Deep Learning CV (PyTorch, ResNet50, PoseNet AR), Offline Voice AI (JARVIS), and Full-Stack systems (Spring Boot, React). Ask me about any specific project!`;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      appendMessage(escapeHtml(val), true);
      input.value = '';
      setTimeout(() => {
        appendMessage(generateBotReply(val), false);
      }, 260);
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-query');
        appendMessage(escapeHtml(q), true);
        setTimeout(() => {
          appendMessage(generateBotReply(q), false);
        }, 240);
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. EVENT LISTENERS & INITIALIZATION
     -------------------------------------------------------------------------- */
  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return escapeHtml(str);
  }

  function initEvents() {
    // Scroll Progress & Reveal
    const progressBar = document.getElementById('scrollProgressBar');
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = `${pct}%`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('aman_portfolio_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeIcon) themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', current);
        localStorage.setItem('aman_portfolio_theme', current);
        if (themeIcon) themeIcon.className = current === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      });
    }

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }

    // Project Filter Tabs & Search
    document.querySelectorAll('#projectFilterTabs .filter-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#projectFilterTabs .filter-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.getAttribute('data-filter');
        renderProjects();
      });
    });

    const searchInput = document.getElementById('projectSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProjects();
      });
    }

    // CV Modal Open / Close / Print
    const cvModal = document.getElementById('cvModalBackdrop');
    const openCvBtns = ['openCvModalBtn', 'heroCvBtn', 'footerCvBtn'];
    openCvBtns.forEach((id) => {
      const btn = document.getElementById(id);
      if (btn && cvModal) {
        btn.addEventListener('click', () => {
          cvModal.classList.add('open');
          cvModal.setAttribute('aria-hidden', 'false');
        });
      }
    });

    const closeCvBtn = document.getElementById('closeCvModalBtn');
    if (closeCvBtn && cvModal) {
      closeCvBtn.addEventListener('click', () => {
        cvModal.classList.remove('open');
        cvModal.setAttribute('aria-hidden', 'true');
      });
    }

    const printCvBtn = document.getElementById('printCvBtn');
    if (printCvBtn) {
      printCvBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Lightbox Close
    const lbBackdrop = document.getElementById('lightboxBackdrop');
    const closeLbBtn = document.getElementById('closeLightboxBtn');
    if (closeLbBtn && lbBackdrop) {
      closeLbBtn.addEventListener('click', () => lbBackdrop.classList.remove('open'));
      lbBackdrop.addEventListener('click', (e) => {
        if (e.target === lbBackdrop) lbBackdrop.classList.remove('open');
      });
    }

    // Admin Modal Triggers
    const adminTriggers = [
      { id: 'topAdminBtn', tab: 'tab-photos' },
      { id: 'navAdminBtn', tab: 'tab-photos' },
      { id: 'heroAddPhotoBtn', tab: 'tab-photos' },
      { id: 'openPhotoManagerBtn', tab: 'tab-photos' },
      { id: 'changeProfilePhotoBtn', tab: 'tab-profile' },
      { id: 'addProjectAdminBtn', tab: 'tab-projects' },
      { id: 'footerAdminBtn', tab: 'tab-photos' }
    ];
    adminTriggers.forEach(({ id, tab }) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => openAdminModal(tab));
      }
    });

    const closeAdminBtn = document.getElementById('closeAdminModalBtn');
    if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminModal);

    // Close modals on backdrop click
    [cvModal, adminModalBackdrop].forEach((backdrop) => {
      if (!backdrop) return;
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('open');
      });
    });

    // Admin PIN Form
    const pinForm = document.getElementById('adminPinForm');
    if (pinForm) {
      pinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entered = document.getElementById('adminPinInput').value.trim();
        const err = document.getElementById('adminPinError');
        if (entered === getAdminPin()) {
          adminUnlocked = true;
          err.hidden = true;
          adminPinScreen.hidden = true;
          adminDashboardBody.hidden = false;
          populateAdminForms();
          if (typeof postUnlockCallback === 'function') {
            postUnlockCallback();
            postUnlockCallback = null;
          }
          showToast('Admin Dashboard Unlocked!');
        } else {
          err.hidden = false;
        }
      });
    }

    // Admin Tab Switching
    document.querySelectorAll('.admin-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        switchAdminTab(tab.getAttribute('data-admin-tab'));
      });
    });

    // Moment Photo File Input Upload
    const momentFileInput = document.getElementById('momentFileInput');
    if (momentFileInput) {
      momentFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        try {
          pendingMomentImgData = await compressImageFile(file, 1050, 0.84);
          document.getElementById('momentPreviewImg').src = pendingMomentImgData;
          document.getElementById('momentPreviewWrap').hidden = false;
          showToast('Photo ready! Click "Save Photo to Website".');
        } catch (err) {
          showToast(err.message || 'Could not process image.');
        }
      });
    }

    const clearMomentImgBtn = document.getElementById('clearMomentImgBtn');
    if (clearMomentImgBtn) {
      clearMomentImgBtn.addEventListener('click', () => {
        pendingMomentImgData = '';
        document.getElementById('momentImageUrlInput').value = '';
        document.getElementById('momentPreviewWrap').hidden = true;
        const dropzoneText = document.getElementById('momentDropzoneText');
        if (dropzoneText) dropzoneText.textContent = 'Tap to choose photo from Phone Gallery / Camera';
      });
    }

    const resetMomentBtn = document.getElementById('resetMomentFormBtn');
    if (resetMomentBtn) resetMomentBtn.addEventListener('click', resetMomentForm);

    const cancelEditMomentBtn = document.getElementById('cancelEditMomentBtn');
    if (cancelEditMomentBtn) cancelEditMomentBtn.addEventListener('click', resetMomentForm);

    // Save Moment / Photo Form (Auto-Publishes to Cloud)
    const momentForm = document.getElementById('momentPhotoForm');
    if (momentForm) {
      momentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const editId = document.getElementById('momentEditId').value.trim();
        const title = document.getElementById('momentTitleInput').value.trim();
        const category = document.getElementById('momentCategoryInput').value.trim() || 'Milestone';
        const date = document.getElementById('momentDateInput').value.trim() || '2026';
        const desc = document.getElementById('momentDescInput').value.trim();
        const typedUrl = document.getElementById('momentImageUrlInput').value.trim();
        const finalImg = pendingMomentImgData || typedUrl;

        if (editId) {
          const idx = state.moments.findIndex((x) => x.id === editId);
          if (idx !== -1) {
            state.moments[idx] = {
              ...state.moments[idx],
              title,
              category,
              date,
              description: desc,
              imageUrl: finalImg
            };
          }
          showToast('Updated photo & title!');
        } else {
          state.moments.unshift({
            id: `moment-${Date.now()}`,
            title,
            category,
            date,
            description: desc,
            imageUrl: finalImg,
            icon: 'fa-camera-retro',
            accent: 'cyan'
          });
          showToast('New photo & title added!');
        }

        saveState();
        renderMoments();
        populateAdminForms();
        resetMomentForm();

        // Auto-publish to GitHub so ALL devices see the changes!
        await publishToGitHub(true);
      });
    }

    // Profile Photo File Input
    const profileFileInput = document.getElementById('profilePhotoFileInput');
    if (profileFileInput) {
      profileFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        try {
          pendingProfileImgData = await compressImageFile(file, 800, 0.86);
          document.getElementById('adminProfilePreview').src = pendingProfileImgData;
          showToast('Profile photo ready! Click "Save Profile & Photo Changes".');
        } catch (err) {
          showToast('Failed to load profile photo.');
        }
      });
    }

    // Save Profile Admin Form
    const profileForm = document.getElementById('profileAdminForm');
    if (profileForm) {
      profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const urlInput = document.getElementById('profilePhotoUrlInput').value.trim();
        if (pendingProfileImgData) {
          state.profile.photoUrl = pendingProfileImgData;
        } else if (urlInput) {
          state.profile.photoUrl = urlInput;
        }
        state.profile.name = document.getElementById('adminHeroName').value.trim();
        state.profile.photoTitle = document.getElementById('adminPhotoTitle').value.trim();
        state.profile.linkedin = document.getElementById('adminLinkedin').value.trim();
        state.profile.github = document.getElementById('adminGithub').value.trim();
        state.profile.email = document.getElementById('adminEmail').value.trim();
        state.profile.phone = document.getElementById('adminPhone').value.trim();
        state.profile.location = document.getElementById('adminLocation').value.trim();
        state.profile.bio = document.getElementById('adminBio').value.trim();

        pendingProfileImgData = '';
        saveState();
        renderProfile();
        populateAdminForms();
        showToast('Profile photo & personal details updated!');

        await publishToGitHub(true);
      });
    }

    // Project Cover Upload
    const projFileInput = document.getElementById('projImageFileInput');
    if (projFileInput) {
      projFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        try {
          pendingProjectImgData = await compressImageFile(file, 900, 0.82);
          showToast('Project cover image loaded!');
        } catch (err) {
          showToast('Could not process project cover.');
        }
      });
    }

    const resetProjBtn = document.getElementById('resetProjFormBtn');
    if (resetProjBtn) resetProjBtn.addEventListener('click', resetProjectForm);

    // Save Project Admin Form
    const projectForm = document.getElementById('projectAdminForm');
    if (projectForm) {
      projectForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const editId = document.getElementById('projectEditId').value.trim();
        const title = document.getElementById('projTitleInput').value.trim();
        const category = document.getElementById('projCatInput').value;
        const catLabels = {
          'ai-agents': 'Agentic AI & LLMs',
          'cv-voice': 'Computer Vision & Voice AI',
          'research-data': 'Space & Data Science',
          'fullstack': 'Full-Stack & Web'
        };
        const badge = document.getElementById('projBadgeInput').value.trim() || 'Featured';
        const description = document.getElementById('projDescInput').value.trim();
        const tech = document.getElementById('projTechInput').value.split(',').map((s) => s.trim()).filter(Boolean);
        const github = document.getElementById('projGithubInput').value.trim();
        const live = document.getElementById('projLiveInput').value.trim();

        if (editId) {
          const idx = state.projects.findIndex((x) => x.id === editId);
          if (idx !== -1) {
            state.projects[idx] = {
              ...state.projects[idx],
              title,
              category,
              categoryLabel: catLabels[category] || 'AI Engineering',
              badge,
              description,
              tech,
              github,
              live,
              imageUrl: pendingProjectImgData || state.projects[idx].imageUrl
            };
          }
          showToast('Project updated!');
        } else {
          state.projects.unshift({
            id: `proj-${Date.now()}`,
            title,
            category,
            categoryLabel: catLabels[category] || 'AI Engineering',
            badge,
            icon: 'fa-rocket',
            gradient: 'linear-gradient(135deg, #0f172a, #1d4ed8, #00f2fe)',
            imageUrl: pendingProjectImgData || '',
            description,
            tech,
            github,
            live
          });
          showToast('New project added to portfolio!');
        }

        saveState();
        renderProjects();
        populateAdminForms();
        resetProjectForm();

        await publishToGitHub(true);
      });
    }

    // Cloud Sync Config Form & Banner Handlers
    const cloudSyncForm = document.getElementById('cloudSyncConfigForm');
    if (cloudSyncForm) {
      cloudSyncForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const tokenVal = document.getElementById('githubTokenInput').value.trim();
        const repoVal = document.getElementById('githubRepoInput').value.trim() || 'amanmaurya121212/aman_web';
        const branchVal = document.getElementById('githubBranchInput').value.trim() || 'main';

        setGitHubConfig(tokenVal, repoVal, branchVal);
        showToast('Saving GitHub configuration...');
        await publishToGitHub(false);
      });
    }

    const testCloudSyncBtn = document.getElementById('testCloudSyncBtn');
    if (testCloudSyncBtn) {
      testCloudSyncBtn.addEventListener('click', () => {
        publishToGitHub(false);
      });
    }

    const syncNowBtn = document.getElementById('syncNowBtn');
    if (syncNowBtn) {
      syncNowBtn.addEventListener('click', () => {
        publishToGitHub(false);
      });
    }

    const openCloudSetupBtn = document.getElementById('openCloudSetupBtn');
    if (openCloudSetupBtn) {
      openCloudSetupBtn.addEventListener('click', () => {
        switchAdminTab('tab-backup');
      });
    }

    const toggleTokenBtn = document.getElementById('toggleTokenVisibilityBtn');
    if (toggleTokenBtn) {
      toggleTokenBtn.addEventListener('click', () => {
        const tokenInput = document.getElementById('githubTokenInput');
        const eyeIcon = document.getElementById('tokenEyeIcon');
        if (!tokenInput) return;
        if (tokenInput.type === 'password') {
          tokenInput.type = 'text';
          if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye-slash';
        } else {
          tokenInput.type = 'password';
          if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye';
        }
      });
    }

    // Export / Import / Reset / PIN Change
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'aman-maurya-portfolio-backup.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Portfolio backup exported!');
      });
    }

    const importInput = document.getElementById('importDataInput');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const imported = JSON.parse(ev.target.result);
            if (imported && imported.profile && imported.projects) {
              state = imported;
              saveState();
              renderProfile();
              renderProjects();
              renderMoments();
              populateAdminForms();
              showToast('Backup imported successfully!');
            }
          } catch (err) {
            showToast('Invalid JSON backup file.');
          }
        };
        reader.readAsText(file);
      });
    }

    const resetAllBtn = document.getElementById('resetAllDataBtn');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', () => {
        if (confirm('Reset all portfolio data back to original defaults?')) {
          localStorage.removeItem(STORAGE_KEY);
          state = structuredClone(DEFAULT_DATA);
          renderProfile();
          renderProjects();
          renderMoments();
          populateAdminForms();
          showToast('Portfolio reset to defaults.');
        }
      });
    }

    const changePinForm = document.getElementById('changePinForm');
    if (changePinForm) {
      changePinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPin = document.getElementById('newPinInput').value.trim();
        if (newPin.length >= 4) {
          setAdminPin(newPin);
          document.getElementById('newPinInput').value = '';
          showToast('Admin PIN updated successfully!');
        }
      });
    }

    // Contact Form Dispatch (Email & WhatsApp)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('senderName').value.trim();
        const email = document.getElementById('senderEmail').value.trim();
        const subject = document.getElementById('senderSubject').value;
        const msg = document.getElementById('senderMessage').value.trim();
        const body = encodeURIComponent(`Hi Aman,\n\n${msg}\n\nBest regards,\n${name} (${email})`);
        window.location.href = `mailto:${state.profile.email}?subject=${encodeURIComponent(subject + ' — ' + name)}&body=${body}`;
        showToast('Opening email client...');
      });
    }

    const waBtn = document.getElementById('sendWhatsappBtn');
    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const name = document.getElementById('senderName').value.trim() || 'Visitor';
        const org = document.getElementById('senderEmail').value.trim();
        const subject = document.getElementById('senderSubject').value;
        const msg = document.getElementById('senderMessage').value.trim() || 'Hi Aman, I visited your AI Portfolio and would love to connect!';
        const digits = state.profile.phone.replace(/\D/g, '') || '918546075545';
        const text = encodeURIComponent(`*Portfolio Inquiry: ${subject}*\n*From:* ${name}${org ? ` (${org})` : ''}\n\n${msg}`);
        window.open(`https://wa.me/${digits}?text=${text}`, '_blank', 'noopener');
      });
    }
  }

  /* --------------------------------------------------------------------------
     12. BOOTSTRAP PORTFOLIO
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', async () => {
    renderProfile();
    renderProjects();
    renderMoments();
    initEvents();
    initNeuralCanvas();
    initCustomCursorAndMagnetic();
    initTypewriter();
    initOrbitalSimulator();
    initAiAssistant();

    // Check & fetch latest synced photos/data from Cloud so all devices stay up-to-date
    await fetchRemoteData();
  });
})();

