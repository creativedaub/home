// Portfolio Data for Daniel Ubachi
// Pure JavaScript Object Definitions

const DEVELOPER_INFO = {
  name: 'Daniel Ubachi',
  brandName: 'Daniel Ubachi',
  role: 'Web and AI Developer',
  tagline: 'Website Developer • AI Agents',
  location: 'Website Developer • AI Agents',
  yearsActive: '2021 – PRESENT',
  experienceYears: '5+ Years',
  projectsCompleted: '1million+ lines of codes',
  email: 'danielubachi03@gmail.com',
  github: 'https://github.com/creativedaub',
  avatar: './assets/images/developer_avatar_1789435169657.webp',
  availabilityStatus: 'Available for freelance & enterprise contracts',
  summary:
    "I'm dedicated to architecting high-performance websites, fault-tolerant backend infrastructures, and bespoke autonomous AI agents that automate operations and deliver fast, impactful results.",
  bio: `I am a web and AI developer with specialized expertise in high-converting modern websites, autonomous AI agent systems, and enterprise distributed architecture. Since 2021, I have partnered with fast-growing startups, organizations, and businesses to turn complex technical challenges into scalable, production-ready digital products.

My engineering philosophy centers on clean code, sub-second performance, and intuitive user experiences. Beyond traditional web and mobile development, I build autonomous AI workflows—leveraging LLM orchestration, structured RAG pipelines, and automated tool-calling to eliminate repetitive internal operations and supercharge team velocity.`
};

const PROJECTS = [
  {
    id: 'impactlink-development-platform',
    title: 'ImpactLink – Full Website + Payment + Onboarding System',
    categoryTag: 'Full-Stack Platform',
    category: 'website-creation',
    date: '3/10/25',
    shortDescription: 'Complete website and operations platform for a development and impact services firm, featuring proper internal pages, automated payments, and fully automated partner onboarding.',
    fullDescription: 'A full-stack digital platform built for a professional development and impact services organization. Replaces fragmented external links with a clean multi-page architecture, introduces automated Stripe/PayPal payments for contributions and memberships, and delivers end-to-end automated onboarding email sequences with document collection. Includes a lightweight admin dashboard for submissions, payments, and partner status tracking.',
    image: './assets/images/impact_link.jpg', // Modern web analytics & platform dashboard
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Resend', 'PostgreSQL', 'Prisma'],
    client: 'Impact Development Partners',
    duration: '8 Weeks',
    metrics: '100% internal page architecture, Fully automated payments & onboarding, Admin dashboard for operations',
    architectureHighlights: [
      'Clean multi-page information architecture with no external menu links',
      'Stripe-powered one-time and recurring payment flows with automatic receipts',
      'Trigger-based onboarding email sequences with document upload and status tracking'
    ],
    liveUrl: 'https://impactlink.example.org',
    githubUrl: 'https://github.com/zeenosconcept/impactlink-platform'
  },
  {
    id: 'payflow-africa',
    title: 'PayFlow Africa – Automated Payments & Receipts',
    categoryTag: 'Payments System',
    category: 'fintech-backend',
    date: '11/18/24',
    shortDescription: 'Automated payment and receipt system built for non-profits and professional services organizations, supporting one-time and recurring contributions with full admin reconciliation.',
    fullDescription: 'A robust payments backend and dashboard designed for African non-profits and professional service firms. Supports Stripe alongside optional mobile money pathways, generates automatic receipts, handles recurring contributions, and provides an admin payment dashboard with exportable reconciliation reports. Built for reliability and clear financial tracking.',
    image: './assets/images/payflow_africa.jpg', // Digital fintech & security concept
    technologies: ['Node.js', 'Stripe API', 'PostgreSQL', 'React', 'Tailwind CSS', 'PDF Generation'],
    client: 'African Impact Collective',
    duration: '6 Weeks',
    metrics: 'Fully automated receipts, Recurring contribution support, One-click reconciliation exports',
    architectureHighlights: [
      'Stripe integration with support for one-time and recurring payments',
      'Automatic PDF receipt generation and email delivery',
      'Admin dashboard with payment history and reconciliation tools'
    ],
    liveUrl: 'https://payflow-africa.example.org',
    githubUrl: 'https://github.com/zeenosconcept/payflow-africa'
  },
  {
    id: 'devimpact-site-rebuild',
    title: 'DevImpact Site Rebuild',
    categoryTag: 'Website Redesign',
    category: 'website-creation',
    date: '8/05/24',
    shortDescription: 'Complete information architecture and website rebuild for a development-sector organization, converting external menu links into proper internal pages with fast, mobile-friendly performance.',
    fullDescription: 'A strategic website rebuild focused on fixing poor information architecture. External links that previously sent users away from the site were converted into properly structured internal pages and sections. The result is a fast, mobile-friendly, professional website that keeps visitors engaged and clearly communicates services, programs, and impact.',
    image: './assets/images/devimpact_site_rebuild.jpg', // Clean web design layout workspace
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel'],
    client: 'Development Sector Organization',
    duration: '4 Weeks',
    metrics: '100% internal navigation, Significant improvement in time-on-site, Fully responsive professional design',
    architectureHighlights: [
      'Converted external menu links into structured internal pages',
      'Clean, professional design aligned with development-sector aesthetics',
      'High performance and mobile-first experience'
    ],
    liveUrl: 'https://devimpact.example.org',
    githubUrl: 'https://github.com/zeenosconcept/devimpact-site'
  },
  {
    id: 'robin-properties',
    title: 'Robin Properties Website',
    categoryTag: 'Real Estate Website',
    category: 'website-creation',
    date: '9/15/24',
    shortDescription: 'Modern real estate property portal featuring interactive luxury listings, neighborhood filters, virtual tours, and automated agent scheduling.',
    fullDescription: 'A comprehensive high-converting real estate marketplace engineered for Robin Properties. Delivers instant multi-criteria property search (location, price brackets, architectural style), high-resolution 3D virtual walkthroughs, integrated interactive maps, instant lead inquiry routing, and WhatsApp/calendar booking synchronization for listing agents.',
    image: './assets/images/robin_properties_1789458097704.webp',
    technologies: ['JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Interactive Maps', 'Virtual Tour Engine'],
    client: 'Robin Properties Real Estate',
    duration: '7 Weeks',
    metrics: '4.2x Lead Conversion, $14M+ Inquiries Processed',
    architectureHighlights: [
      'Sub-second vector property filtering across thousands of active listings',
      'Automated CRM lead routing and instant WhatsApp agent alerts',
      'High-fidelity WebGL virtual walkthrough tours with optimized asset loading'
    ],
    liveUrl: 'https://robinproperties.example.com',
    githubUrl: 'https://github.com/creativedaub/robin-properties-web'
  },
  {
    id: 'samira-ai-sales',
    title: 'Samira - AI Sales Assistant',
    categoryTag: 'AI Agents',
    category: 'ai-agents',
    date: '2/28/25',
    shortDescription: 'Autonomous 24/7 conversational AI sales agent that engages inbound leads, qualifies deal criteria, and books discovery meetings on auto-pilot.',
    fullDescription: 'Samira is an enterprise-grade autonomous AI sales assistant that handles inbound web inquiries in real time. It dynamically qualifies prospect budgets, company size, and technical needs, answers complex product questions using RAG knowledge bases, and seamlessly books discovery meetings directly onto sales reps Google Calendars with zero human intervention.',
    image: './assets/images/samira_ai_sales_1789458113478.webp',
    technologies: ['Google Gemini API', 'Python / FastAPI', 'LangGraph', 'Qdrant RAG', 'Calendar Integration'],
    client: 'Veloce Revenue Systems',
    duration: '8 Weeks',
    metrics: '68% Lead-to-Meeting Conversion, 24/7 Instant Qualification',
    architectureHighlights: [
      'Zero-hallucination objection handling with strict enterprise product guardrails',
      'Bi-directional HubSpot and Salesforce CRM contact synchronization',
      'Automated calendar scheduling via real-time Google Calendar availability checks'
    ],
    liveUrl: 'https://samira.sales-ai.demo',
    githubUrl: 'https://github.com/creativedaub/samira-ai-sales-assistant'
  },
  {
    id: 'autoonboard-partner-system',
    title: 'AutoOnboard – Automated Client & Partner Onboarding Platform',
    categoryTag: 'Automation Platform',
    category: 'backend-automation',
    date: '1/22/25',
    shortDescription: 'Automated onboarding system that turns form submissions into personalized email sequences, document collection workflows, and real-time status tracking for clients and partners.',
    fullDescription: 'A focused automation platform designed to eliminate manual onboarding emails. New partners or clients submit a form, data is stored, and a personalized multi-step email sequence is automatically triggered. Includes document upload requests, progress tracking, admin notifications, and a simple dashboard to monitor onboarding status across all active partners.',
    image: './assets/images/autoonboard.jpg', // Digital workflows and team automation
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Resend', 'React', 'Tailwind CSS'],
    client: 'Regional Development Network',
    duration: '5 Weeks',
    metrics: 'Zero manual onboarding emails, Average onboarding time reduced by 70%, Full audit trail of communications',
    architectureHighlights: [
      'Form-to-database-to-email automation pipeline',
      'Personalized multi-step email sequences with document requests',
      'Admin dashboard with real-time onboarding status and notifications'
    ],
    liveUrl: 'https://autoonboard.example.org',
    githubUrl: 'https://github.com/zeenosconcept/autoonboard-platform'
  },
  {
    id: 'ai-response-assistant',
    title: 'AI Response Assistant for Development Organizations',
    categoryTag: 'AI Automation',
    category: 'ai-solutions',
    date: '4/12/25',
    shortDescription: 'AI-powered chatbot and email assistant trained on development program FAQs, capable of lead qualification and drafting accurate first responses to partner and donor inquiries.',
    fullDescription: 'An AI assistant built specifically for development and impact organizations. It answers common questions about programs and services, qualifies incoming leads, and drafts professional first-response emails for the team to review and send. Designed to reduce response time while maintaining accuracy and brand voice.',
    image: './assets/images/ai_response_assistant.jpg', // Modern Artificial Intelligence visual concept
    technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'React', 'Vector Database'],
    client: 'Pan-African Development Initiative',
    duration: '5 Weeks',
    metrics: 'Significant reduction in first-response time, Accurate FAQ handling, Seamless handoff to human team',
    architectureHighlights: [
      'RAG-based knowledge system trained on organization programs and FAQs',
      'Lead qualification and intent detection',
      'AI-drafted email responses with human review workflow'
    ],
    liveUrl: 'https://ai-assistant.example.org',
    githubUrl: 'https://github.com/zeenosconcept/ai-response-assistant'
  },
  {
    id: 'omniops-agent',
    title: 'Enterprise Ops Multi-Agent Swarm',
    categoryTag: 'AI Agents',
    category: 'ai-agents',
    date: '1/20/25',
    shortDescription: 'Autonomous AI agent system for enterprise document triage, financial reconciling, and automated ERP sync.',
    fullDescription: 'An enterprise-ready autonomous AI swarm that coordinates document extraction, financial ledger reconciliation, and ERP database synchronizations. Built with strict guardrails, role-based tool execution, and continuous auditing.',
    image: './assets/images/multi_agent_ops_1789458548843.webp',
    technologies: ['Google Gemini API', 'Python / FastAPI', 'LangChain', 'Qdrant Vector DB', 'Docker'],
    client: 'Apex Global Logistics',
    duration: '10 Weeks',
    metrics: '150+ Hours Saved per Month, 99.4% Extraction Precision',
    architectureHighlights: [
      'Multi-agent hierarchical coordination with LangGraph supervisory nodes',
      'Zero-hallucination verification pipeline with cross-document source citations',
      'Secure sandbox runtime preventing arbitrary code execution'
    ],
    liveUrl: 'https://omniops.internal.demo',
    githubUrl: 'https://github.com/creativedaub/omniops-enterprise-agent'
  },
  {
    id: 'pulsehealth-app',
    title: 'PulseHealth Remote Patient Monitoring Mobile App',
    categoryTag: 'Mobile App',
    category: 'mobile-apps',
    date: '11/10/24',
    shortDescription: 'Cross-platform mobile telemedicine app connecting chronic patients with specialists in real-time.',
    fullDescription: 'HIPAA-compliant mobile telemedicine application featuring Bluetooth biometric sensor pairing, real-time vitals graphing, encrypted WebRTC audio/video consultations, and AI-assisted emergency threshold triage.',
    image: './assets/images/mobile_app_mockup_1789435222624.webp',
    technologies: ['React Native', 'Node.js', 'WebRTC', 'Redis', 'PostgreSQL'],
    client: 'PulseHealth Telematics',
    duration: '12 Weeks',
    metrics: '45,000+ Active Patients, 4.9 App Store Rating',
    architectureHighlights: [
      'End-to-end encrypted WebRTC audio/video consultation channel',
      'Offline-first synchronization with SQLite local store and delta sync',
      'Low-latency biometric telemetry streaming via WebSockets'
    ],
    liveUrl: 'https://pulsehealth.app.demo',
    githubUrl: 'https://github.com/creativedaub/pulsehealth-mobile'
  },
  {
    id: 'kroma-terminal',
    title: 'Kroma Capital Markets High-Speed Terminal',
    categoryTag: 'Bespoke UI',
    category: 'bespoke-ui',
    date: '7/30/24',
    shortDescription: 'Ultra-dense bespoke design tokens, custom chart engine, and real-time streaming market terminal UI.',
    fullDescription: 'Custom financial terminal interface built from scratch for asset managers. Features high-frequency orderbook rendering, millisecond canvas candlestick charting, custom dark aesthetic design tokens, and modular draggable bento panels.',
    image: './assets/images/bespoke_ui_mockup_1789435233528.webp',
    technologies: ['JavaScript', 'Canvas / WebGL', 'Tailwind CSS', 'WebSockets'],
    client: 'Kroma Capital Markets',
    duration: '7 Weeks',
    metrics: '60 FPS Render at 10,000 Ticks/Sec, Sub-10ms UI latency',
    architectureHighlights: [
      'Custom WebGL hardware-accelerated canvas chart renderer',
      'Extensive atomic design token system matching high-contrast terminal standards',
      'Memory-efficient circular buffers preventing UI garbage collection stutter'
    ],
    liveUrl: 'https://kroma-terminal.preview.demo',
    githubUrl: 'https://github.com/creativedaub/kroma-design-system'
  },
  {
    id: 'cognitivedoc-rag',
    title: 'CognitiveDoc Enterprise Semantic Search',
    categoryTag: 'AI Agents',
    category: 'ai-agents',
    date: '12/04/24',
    shortDescription: 'Hybrid dense-sparse vector RAG engine indexing 500,000+ corporate PDF contracts and engineering blueprints.',
    fullDescription: 'High-speed retrieval-augmented generation engine engineered for legal and engineering audit teams. Implements hybrid dense-sparse vector retrieval with cross-encoder re-ranking for deterministic document search.',
    image: './assets/images/cognitivedoc_rag_search_1789458790890.webp',
    technologies: ['Google Gemini API', 'Python', 'FastAPI', 'Qdrant', 'Tailwind CSS'],
    client: 'Veritas Audit Alliance',
    duration: '5 Weeks',
    metrics: '99.2% Accuracy rate on regulatory lookups, 4.2x faster audit prep',
    architectureHighlights: [
      'Hybrid semantic dense + sparse BM25 reranking search pipeline',
      'Granular department permission filters preventing unauthorized data leakage',
      'Streaming token responses with interactive source attribution badges'
    ],
    liveUrl: 'https://cognitivedoc.enterprise.demo',
    githubUrl: 'https://github.com/creativedaub/cognitivedoc-rag-engine'
  },
  {
    id: 'fintrack-mobile',
    title: 'FinTrack Multi-Currency Wealth Dashboard',
    categoryTag: 'Mobile App',
    category: 'mobile-apps',
    date: '8/12/24',
    shortDescription: 'Fintech mobile client for tracking global assets, multi-currency fx conversions, and automated savings rules.',
    fullDescription: 'Clean mobile application with instant cross-border transfers, dynamic savings vaults, and automated expense categorization powered by lightweight machine learning classifiers.',
    image: './assets/images/fintrack_wealth_mobile_1789458806704.webp',
    technologies: ['React Native', 'Go Backend', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    client: 'FinTrack Global Ltd',
    duration: '9 Weeks',
    metrics: 'High Monthly volume processed securely',
    architectureHighlights: [
      'Atomic distributed transactions with idempotent payment guarantees',
      'Dynamic currency rate caching via Redis pub/sub',
      'Haptic feedback and fluid interactive swipe gestures'
    ],
    liveUrl: 'https://fintrack.finance.demo',
    githubUrl: 'https://github.com/creativedaub/fintrack-mobile'
  },
  {
    id: 'vanguard-backend',
    title: 'Apex Distributed Event-Driven Cloud Backend',
    categoryTag: 'Backend & Cloud',
    category: 'backend-cloud',
    date: '10/28/24',
    shortDescription: 'High-throughput microservices architecture processing 45k events/sec with automated failover and telemetry.',
    fullDescription: 'Scalable backend foundation for enterprise logistics operations. Manages global inventory dispatching, vehicle telematics ingestion, and automated webhook dispatching with fault tolerance.',
    image: './assets/images/vanguard_cloud_backend_1789458823855.webp',
    technologies: ['Go', 'Node.js', 'Kafka', 'Redis Cluster', 'PostgreSQL', 'Docker', 'AWS ECS'],
    client: 'Vanguard Global Freight',
    duration: '14 Weeks',
    metrics: '99.99% system uptime, 14ms p99 latency under peak load',
    architectureHighlights: [
      'Asynchronous event queues with dead-letter retry logic',
      'Distributed rate limiting using Redis sliding window algorithms',
      'Comprehensive OpenTelemetry metrics and structured JSON logging'
    ],
    liveUrl: 'https://vanguard-status.demo',
    githubUrl: 'https://github.com/creativedaub/apex-distributed-backend'
  },
  {
    id: 'african-climate-reporting',
    title: 'African Climate Reporting Journalism Website',
    categoryTag: 'Journalism Website',
    category: 'website-creation',
    date: '2/15/25',
    shortDescription: 'Investigative journalism platform and editorial media hub delivering pan-African climate stories, interactive data maps, and multi-language reporting.',
    fullDescription: 'A high-impact digital journalism and investigative reporting hub engineered for pan-African climate crises coverage. Features interactive climate geospatial maps, rich multimedia photo essays, dynamic editorial publishing workflow, multilingual content delivery, and sub-second asset caching for audiences across varying mobile connectivity bandwidths.',
    image: './assets/images/climate_reporting_1789458082929.webp',
    technologies: ['HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'Geospatial Maps', 'Cloudflare CDN'],
    client: 'African Climate Journalism Network',
    duration: '6 Weeks',
    metrics: '99.8% Lighthouse Speed, 320k+ Monthly Readers across 18 Countries',
    architectureHighlights: [
      'Lightweight offline-friendly article reader for low-bandwidth mobile networks',
      'Interactive GIS climate change heatmap visualizer',
      'Editorial headless publishing engine with structured journalism schema'
    ],
    liveUrl: 'https://africanclimatereporting.example.org',
    githubUrl: 'https://github.com/creativedaub/african-climate-reporting'
  }
];

const TESTIMONIALS = [
  {
    id: '1',
    quote:
      "Daniel's ability to seamlessly bridge robust web development with cutting-edge AI agent capabilities transformed our internal operations. The invoice triage agent he built saved our finance department over 150 hours every month. His attention to reliability and clean architecture is unmatched.",
    clientName: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Global Logistics',
    rating: 5,
    avatar: './assets/images/marcus_vance_avatar_1789463819547.webp',
    projectDelivered: 'Enterprise Ops AI Agent Suite'
  },
  {
    id: '2',
    quote:
      "Working with Daniel Ubachi on the Robin Properties portal was one of the smoothest development experiences we've had. He delivered pixel-perfect UI execution, an ultra-fast property search filter, and streamlined client viewings without a single hitch.",
    clientName: 'Robin Montgomery',
    role: 'Principal Broker & Founder',
    company: 'Robin Properties',
    rating: 5,
    avatar: './assets/images/robin_montgomery_avatar_1789463833474.webp',
    projectDelivered: 'Robin Properties Real Estate Portal'
  },
  {
    id: '3',
    quote:
      "Daniel took our investigative journalism vision and brought it to life with jaw-dropping fluidity. His engineering is fast, clean, and modern. Within the first two weeks of our website launch, reader engagement and story shares jumped by over 140%. He is our go-to engineer.",
    clientName: 'Amina Diallo',
    role: 'Managing Editor & Co-Founder',
    company: 'African Climate Journalism Network',
    rating: 5,
    avatar: './assets/images/aris_thorne_avatar_1789463847904.webp',
    projectDelivered: 'African Climate Reporting Journalism Website'
  },
  {
    id: '4',
    quote:
      "If you need an engineer who understands complex web systems as well as sleek modern UI and AI automation, Daniel is the one to call. He designed our design tokens, built our high-frequency trading terminal frontend, and hardened our microservices under tight deadlines.",
    clientName: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Kroma Capital Markets',
    rating: 5,
    avatar: './assets/images/elena_rostova_avatar_1789463862391.webp',
    projectDelivered: 'Kroma Bespoke UI & Trading Terminal'
  }
];

const FAQS = [
  {
    id: 'faq-1',
    category: 'workflow',
    question: 'What is your typical development workflow and how do we communicate?',
    answer:
      'I operate in agile two-week development sprints. We start with a comprehensive Discovery & Architecture Call to define business goals, scope, and technical specifications. Throughout development, you receive weekly live staging demos, continuous progress reports via Slack or WhatsApp, and transparent GitHub task tracking. You are never left wondering about project status.'
  },
  {
    id: 'faq-2',
    category: 'timelines',
    question: 'What are typical project timelines for websites, mobile apps, and AI solutions?',
    answer:
      'Timelines depend on scope complexity: Bespoke business websites typically take 3 to 5 weeks from design to production deployment. Full-featured mobile applications usually require 8 to 12 weeks. AI agent workflows and enterprise automation integrations range between 4 to 8 weeks, including schema training, guardrail testing, and integration with your existing ERP/CRM systems.'
  },
  {
    id: 'faq-3',
    category: 'ai-solutions',
    question: 'How do you build AI agents for streamlining internal enterprise operations?',
    answer:
      'I specialize in building deterministic, secure AI agent pipelines using state-of-the-art LLMs (Gemini, Claude, GPT) coupled with LangChain, vector databases (Qdrant, Chroma), and automated function calling. The agents connect directly to your databases, ticketing systems, or file storage to triage support, reconcile invoices, or synthesize knowledge—built with strict zero-hallucination verification loops and human-in-the-loop approval triggers.'
  },
  {
    id: 'faq-4',
    category: 'backend',
    question: 'What tech stack do you use for backend development and cloud scaling?',
    answer:
      'My primary toolkit includes modern Web frameworks, Node.js (JavaScript), Python (FastAPI), and Go for microservices, paired with PostgreSQL, Redis, Kafka, and Docker. Deployments are orchestrated on AWS, Google Cloud, or modern PaaS with automated CI/CD pipelines, SSL certificates, zero-downtime blue/green rollouts, and 99.9% uptime guarantees.'
  },
  {
    id: 'faq-5',
    category: 'workflow',
    question: 'Do you offer post-launch maintenance, SLAs, and updates?',
    answer:
      'Yes! Every project includes 30 days of complimentary post-launch support and bug fixes. Following that, I offer flexible monthly maintenance retainers covering cloud infrastructure monitoring, database backups, security patches, and ongoing AI model prompt fine-tuning.'
  },
  {
    id: 'faq-6',
    category: 'timelines',
    question: 'How do discovery calls work and how can we get started?',
    answer:
      'You can schedule a complimentary 15-minute intro or 30-minute discovery call directly using the Google Calendar booking module below. We will discuss your current bottlenecks, target budget, and desired timeline. Following the call, I deliver a detailed technical roadmap and fixed-price quotation within 48 hours.'
  }
];

const TECHNICAL_SKILLS = [
  {
    category: 'Web & Frontend',
    skills: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive & Accessible UX', 'Vite', 'State Management', 'Bespoke UI Systems', 'Dynamic CMS']
  },
  {
    category: 'AI Solutions & Agents',
    skills: ['Google Gemini API', 'Autonomous AI Sales Agents', 'LangChain & LangGraph', 'Multi-Agent Swarms', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases (Qdrant)', 'Structured Tool Calling', 'Prompt Guardrails']
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js / Express', 'Python / FastAPI', 'Go (Golang)', 'REST & GraphQL APIs', 'PostgreSQL', 'Redis Caching', 'Kafka', 'Docker & Cloud Deployment']
  },
  {
    category: 'DevOps & Tooling',
    skills: ['AWS (ECS, S3, RDS)', 'Google Cloud Platform', 'CI/CD Pipelines (GitHub Actions)', 'Postman API Testing', 'Git Version Control', 'Linux Server Admin']
  }
];

const SERVICES_DATA = [
  {
    id: 'websites',
    title: 'Website Creation for Businesses',
    subtitle: 'Bespoke, high-performance web applications built for conversion, extreme speed, and brand authority.',
    deliverables: ['Custom design execution & atomic tokens', 'Dynamic SEO indexing & schema markup', 'Sub-second page load times on edge networks', 'Headless CMS integrations & editor handoff', 'Full mobile responsive precision'],
    techStack: ['HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Cloudflare CDN'],
    timeline: '3–5 Weeks Typical Delivery'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    subtitle: 'Cross-platform iOS and Android mobile solutions with fluid 60fps animations and offline synchronization.',
    deliverables: ['Native iOS & Android cross-platform builds', 'Offline-first database caching & sync', 'Push notifications & biometric authentication', 'Real-time WebRTC audio/video and WebSockets', 'App Store and Google Play deployment support'],
    techStack: ['React Native', 'Expo', 'SQLite', 'WebRTC', 'Fastlane'],
    timeline: '8–12 Weeks Typical Delivery'
  },
  {
    id: 'bespoke-ui',
    title: 'Bespoke UI Design & Custom Tokens',
    subtitle: 'Engineered design systems, atomic design tokens, and dense data visualization interfaces.',
    deliverables: ['Tailored high-contrast component libraries', 'Mathematical typography & spacing tokens', 'Custom interactive canvas data charts', 'WCAG AA accessible color hierarchy', 'Figma to production code synchronization'],
    techStack: ['Tailwind CSS', 'CSS Variables', 'Figma Tokens', 'HTML5 Canvas', 'SVG Engine'],
    timeline: '3–6 Weeks Typical Delivery'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Internal Operations Automation',
    subtitle: 'Autonomous intelligent agents that triage documents, qualify sales leads, automate cross-system workflows, and eliminate manual bottlenecks.',
    deliverables: ['Autonomous conversational AI sales assistants (Samira)', 'Custom multi-agent swarm orchestration', 'Enterprise RAG pipelines with source attribution', 'CRM automated bi-directional synchronization', 'Zero-hallucination verification loops'],
    techStack: ['Google Gemini API', 'Python / FastAPI', 'LangGraph', 'Qdrant Vector DB', 'Docker'],
    timeline: '4–8 Weeks Typical Delivery'
  },
  {
    id: 'backend-cloud',
    title: 'Backend & Cloud Scaling Architecture',
    subtitle: 'Resilient microservices, high-throughput message queues, and cloud infrastructure engineered for zero downtime.',
    deliverables: ['Microservices & distributed REST/GraphQL APIs', 'High-throughput asynchronous event queues', 'Database optimization, indexing & caching', 'Automated CI/CD zero-downtime deployment', 'OpenTelemetry metrics & cloud monitoring'],
    techStack: ['Node.js', 'Go (Golang)', 'PostgreSQL', 'Redis Cluster', 'AWS / GCP / Docker'],
    timeline: '6–10 Weeks Typical Delivery'
  }
];
