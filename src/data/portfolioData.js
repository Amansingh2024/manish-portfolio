import manishPortrait from '../assets/manish-portrait.jpg';
import manishOffice from '../assets/manish-office.jpg';

export const images = {
  portrait: manishPortrait,
  office: manishOffice
};

export const personalInfo = {
  name: "Manish Singh",
  title: "Digital Marketing Executive & R&D Management Professional",
  avatar: manishPortrait,
  officePhoto: manishOffice,
  taglines: [
    "Digital Marketing Executive",
    "R&D & Operations Specialist",
    "Performance Marketer (Meta & Google Ads)",
    "Video Editor & Producer (Premiere Pro)",
    "Shopify & E-Commerce Strategist",
    "Google Business Profile & Local SEO Lead"
  ],
  stats: [
    { label: "Digital Marketing Exp", value: "2+ Years", color: "from-cyan-400 to-blue-500" },
    { label: "R&D & Management", value: "1.5+ Years", color: "from-purple-400 to-pink-500" },
    { label: "Multi-Channel Campaigns", value: "50+ Executed", color: "from-emerald-400 to-teal-500" },
    { label: "Shopify & Landing Pages", value: "High Converting", color: "from-amber-400 to-orange-500" }
  ],
  overview:
    "Experienced Digital Marketing professional with 2+ years of experience and 1.5 years in R&D and Management. Skilled in managing end-to-end digital marketing campaigns, social media growth, high-impact content creation, video editing (Adobe Premiere Pro), branding, vendor sourcing & coordination, market research, business development, planning, team coordination, and day-to-day management activities. Experienced in handling YouTube, Instagram, Facebook, LinkedIn and other digital platforms, along with supporting business operations, identifying new opportunities, and implementing high-converting marketing strategies to accelerate brand visibility and revenue growth.",
  contact: {
    phone: "+91-790 392 6741",
    rawPhone: "+917903926741",
    email: "manishsinghbr790@gmail.com",
    location: "Gardanibagh, Patna, Bihar",
    whatsapp: "https://wa.me/917903926741",
    experienceTime: "2022 - Present"
  }
};

export const experiences = [
  {
    id: "kanha-furniture",
    company: "Kanha Furniture Company Pvt. Ltd.",
    role: "Digital Marketing, Creative Video & Operations Lead",
    period: "April 2024 - Present",
    status: "Present Working",
    location: "Patna, Bihar",
    badge: "Current Role",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    iconName: "Video",
    iconBg: "from-emerald-500 to-teal-600",
    summary:
      "Spearheading end-to-end digital marketing, video production on Premiere Pro, multi-platform social media growth, vendor sourcing, Google Business Profile optimization, and showroom floor coordination.",
    highlights: [
      "Managed and executed high-impact video editing requirements using Adobe Premiere Pro, including promotional videos, product highlights, showroom walk-throughs, and viral social media reels.",
      "Managed comprehensive social media presence across YouTube, Instagram, Facebook, LinkedIn, covering strategic content calendar planning, creative coordination, and regular profile engagement.",
      "Handled vendor sourcing and coordination for printing, branding, hoardings, promotional stationery (booking memos, bill books, gift items) with timely execution.",
      "Managed and maintained company's Google Business Profile with active updates, SEO-rich product posts, high rating review management, and local search visibility enhancement.",
      "Handled showroom floor management and sales-team coordination, ensuring seamless customer handling, prompt resolution, and team alignment.",
      "Empowered sales personnel with required marketing creatives, catalogues, product collateral, and customer-facing promotional assets.",
      "Maintained strict brand identity and consistency across digital platforms, showroom branding, and physical print collateral."
    ],
    skills: ["Adobe Premiere Pro", "Google Business Profile", "Social Media Growth", "Vendor Coordination", "Floor Management", "Branding Design"]
  },
  {
    id: "prince-digital",
    company: "Prince Digital Solution",
    role: "Performance Marketer & Social Media Designer",
    period: "June 2023 - 13 March 2024",
    status: "Completed",
    location: "Patna, Bihar",
    badge: "Performance & Ops",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    iconName: "Megaphone",
    iconBg: "from-purple-500 to-indigo-600",
    summary:
      "Executed high-ROI paid ad campaigns on Meta & Google Ads, designed high-engagement social media content via Canva, maintained landing pages, and managed staff operations.",
    highlights: [
      "Designed and maintained high-converting landing pages and responsive company websites.",
      "Acted as Daily Content & Social Media Designer using Canva, delivering daily posts, stories, infographics, and promotional banners.",
      "Managed Performance Marketing & Paid Advertising across Meta (Facebook/Instagram Ads) and Google Ads, optimizing for target conversions, lower CPA, and highest ROAS.",
      "Managed daily employee attendance, work log monitoring, and monthly salary disbursement operations.",
      "Monitored and optimized Google Business Profiles for local client accounts, boosting local inbound leads and customer inquiries."
    ],
    skills: ["Meta Ads", "Google Ads", "Canva Design", "Landing Page Design", "Staff Operations", "Local SEO"]
  },
  {
    id: "upstart-media",
    company: "Upstart Media Pvt. Ltd.",
    role: "Digital Marketing Executive & E-Commerce Specialist",
    period: "Feb 2022 - 23 May 2023",
    status: "Completed",
    location: "Patna, Bihar",
    badge: "E-Commerce & SEO",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    iconName: "ShoppingBag",
    iconBg: "from-cyan-500 to-blue-600",
    summary:
      "Planned and executed full-funnel digital marketing campaigns, high-converting Shopify e-commerce store architecture, and performance ads across diverse industry verticals.",
    highlights: [
      "Planned and executed all web, SEO/SEM, database marketing, email marketing, social media, and programmatic display campaigns.",
      "Designed, developed, and maintained robust social media presence and online community engagement.",
      "Measured, analyzed, and generated comprehensive performance reports of digital campaigns against ROAS and conversion benchmarks.",
      "Managed and scaled paid advertising campaigns across multiple ad networks.",
      "Designed and developed customized, high-converting Shopify stores for clients across Fashion, Electronics, Health & Wellness niches.",
      "Engineered sales funnel optimizations and conversion rate optimization (CRO) strategies to maximize average order value."
    ],
    skills: ["Shopify Development", "SEO / SEM", "Email Marketing", "Sales Funnels", "Paid Campaigns", "Analytics"]
  }
];

export const skillsList = [
  {
    category: "Paid Ads & Performance Marketing",
    icon: "Target",
    color: "from-cyan-500 to-blue-600",
    items: [
      { name: "Meta Ads (Facebook & Instagram)", level: 95, icon: "Facebook" },
      { name: "Google Ads (Search, Display, Video)", level: 90, icon: "Search" },
      { name: "Conversion Rate Optimization (CRO)", level: 88, icon: "TrendingUp" },
      { name: "Sales Funnel Engineering", level: 92, icon: "Filter" }
    ]
  },
  {
    category: "Creative Production & Video Editing",
    icon: "Video",
    color: "from-purple-500 to-pink-600",
    items: [
      { name: "Adobe Premiere Pro Video Editing", level: 94, icon: "Film" },
      { name: "Graphics Design (Canva & Social Creatives)", level: 92, icon: "Palette" },
      { name: "Product & Promotional Videos", level: 90, icon: "Play" },
      { name: "Print & Stationery Branding Materials", level: 88, icon: "Printer" }
    ]
  },
  {
    category: "Social Media & Community Growth",
    icon: "Share2",
    color: "from-amber-500 to-orange-600",
    items: [
      { name: "YouTube Channel Management & SEO", level: 90, icon: "Youtube" },
      { name: "Instagram & Facebook Strategy", level: 95, icon: "Instagram" },
      { name: "LinkedIn & Twitter/X Brand Growth", level: 86, icon: "Linkedin" },
      { name: "Google Business Profile & Local SEO", level: 94, icon: "MapPin" }
    ]
  },
  {
    category: "R&D, Management & Web Operations",
    icon: "Briefcase",
    color: "from-emerald-500 to-teal-600",
    items: [
      { name: "R&D Market Research & Strategy", level: 90, icon: "Microscope" },
      { name: "Vendor Sourcing & Negotiation", level: 92, icon: "Truck" },
      { name: "Sales Floor & Team Coordination", level: 94, icon: "Users" },
      { name: "Inventory Management & Operations", level: 88, icon: "Boxes" },
      { name: "Shopify Store & Landing Page Design", level: 90, icon: "Globe" },
      { name: "Email Marketing & Automation", level: 86, icon: "Mail" }
    ]
  }
];

export const educationList = [
  {
    degree: "Graduation (Bachelor's Degree)",
    institution: "R L S Y College, Bakhtiarpur",
    boardUniversity: "Pataliputra University",
    score: "61.1%",
    year: "2022",
    icon: "GraduationCap",
    color: "from-blue-500 to-indigo-600",
    description: "Successfully completed graduation with focused analytical and operational understanding."
  },
  {
    degree: "Intermediate (+2 High School)",
    institution: "+2 High School, Karjan",
    boardUniversity: "B.S.E.B",
    score: "41%",
    year: "2019",
    icon: "BookOpen",
    color: "from-purple-500 to-violet-600",
    description: "Completed higher secondary curriculum under Bihar School Examination Board."
  },
  {
    degree: "Matriculation (10th)",
    institution: "+2 High School, Karjan",
    boardUniversity: "B.S.E.B",
    score: "58%",
    year: "2016",
    icon: "Award",
    color: "from-cyan-500 to-teal-600",
    description: "Completed secondary school certificate with foundational academic excellence."
  }
];

export const coursesList = [
  {
    title: "DIGITAL MARKETING (Advanced Digital Marketing Training)",
    institution: "Advanced Digital Marketing Academy, Patna",
    year: "2021",
    location: "Patna, Bihar",
    icon: "Sparkles",
    color: "from-amber-400 to-orange-500",
    description:
      "Comprehensive certification covering Full-Funnel Digital Marketing, Search Engine Optimization (SEO/SEM), Social Media Marketing (SMM), Google Ads, Meta Ads, Email Automation, and Web Analytics."
  }
];

// Single Continuous Connected Line Tree Sequence with imported images
export const singleLineTreeNodes = [
  {
    id: "origin-manish",
    stage: "ORIGIN ROOT",
    title: "Manish Singh",
    role: "Executive Core",
    period: "2022 - Present",
    category: "origin",
    icon: "User",
    photo: manishPortrait,
    color: "#06b6d4",
    tag: "Root Origin",
    badgeText: "3.5+ Yrs Exp",
    summary:
      "Strategic Digital Marketing Executive & R&D Operations Lead with proven expertise across paid campaigns, video production on Premiere Pro, and showroom operations.",
    points: [
      "2+ Years Digital Marketing & Performance Ads",
      "1.5 Years R&D, Operations & Team Management",
      "Adobe Premiere Pro Video Editing Lead",
      "Shopify Stores & Sales Funnel Architect"
    ],
    skills: ["Meta Ads", "Google Ads", "Premiere Pro", "Shopify", "R&D Operations", "Team Leadership"]
  },
  {
    id: "node-kanha",
    stage: "WORK EXPERIENCE",
    title: "Kanha Furniture Company",
    role: "Digital Marketing & Video Lead",
    period: "Apr 2024 - Present",
    category: "experience",
    icon: "Video",
    color: "#10b981",
    tag: "Present Working",
    badgeText: "Current Lead",
    summary:
      "Leading company-wide video production on Premiere Pro, omni-channel social media marketing, vendor sourcing for branding materials, and showroom sales floor coordination.",
    points: [
      "Adobe Premiere Pro Promotional & Product Videos",
      "Social Media Management (YT, Instagram, FB, LinkedIn)",
      "Vendor Sourcing for Printing, Branding Stationery & Gifts",
      "Google Business Profile SEO, Posts & Review Management",
      "Showroom Floor Management & Sales Staff Coordination"
    ],
    skills: ["Premiere Pro", "Google Business", "Social Growth", "Vendor ERP", "Sales Operations"]
  },
  {
    id: "node-prince",
    stage: "WORK EXPERIENCE",
    title: "Prince Digital Solution",
    role: "Performance Marketer & Content",
    period: "Jun 2023 - Mar 2024",
    category: "experience",
    icon: "Megaphone",
    color: "#8b5cf6",
    tag: "Performance & Ops",
    badgeText: "Meta / Google Ads",
    summary:
      "Executed high-ROI performance marketing on Meta & Google Ads, created daily visual creatives using Canva, maintained landing pages, and managed staff attendance/payroll.",
    points: [
      "Conversion Optimized Meta & Google Ads Campaigns",
      "Daily Social Media Posts, Stories & Banner Design (Canva)",
      "Landing Page Design & Responsive Maintenance",
      "Daily Employee Attendance & Salary Management",
      "Google Business Profile Local Ranking Optimization"
    ],
    skills: ["Meta Ads", "Google Ads", "Canva", "Landing Pages", "Staff Payroll", "Local SEO"]
  },
  {
    id: "node-upstart",
    stage: "WORK EXPERIENCE",
    title: "Upstart Media Pvt. Ltd.",
    role: "E-Commerce & Digital Marketing",
    period: "Feb 2022 - May 2023",
    category: "experience",
    icon: "ShoppingBag",
    color: "#06b6d4",
    tag: "Shopify & SEO",
    badgeText: "E-Commerce",
    summary:
      "Executed all SEO/SEM, email marketing, paid ads, and designed high-converting Shopify stores across Fashion, Electronics, and Health niches.",
    points: [
      "Full-Funnel SEO/SEM, Database & Display Campaigns",
      "High-Converting Shopify Store Development",
      "ROAS & Conversion Rate Optimization (CRO)",
      "Social Media Community Architecture",
      "Automated Email Marketing & Sales Funnels"
    ],
    skills: ["Shopify", "SEO/SEM", "Email Marketing", "Paid Media", "Sales Funnels"]
  },
  {
    id: "node-skill-video",
    stage: "CORE SKILLS & TECH",
    title: "Creative & Premiere Pro",
    role: "Video Editing & Graphic Design",
    period: "Expert Mastery",
    category: "skills",
    icon: "Film",
    color: "#ec4899",
    tag: "Creative Production",
    badgeText: "Premiere Pro",
    summary:
      "Expert editing in Adobe Premiere Pro producing promotional videos, showroom tours, social reels, and designing marketing stationery on Canva.",
    points: [
      "Adobe Premiere Pro High-Paced Video Editing",
      "Promotional, Product & Showroom Walkthroughs",
      "Social Media Reels, Shorts & Ad Creatives",
      "Stationery, Banners, Bill Books & Booking Memos"
    ],
    skills: ["Premiere Pro", "Canva", "Video Editing", "Visual Storytelling", "Brand Stationery"]
  },
  {
    id: "node-skill-ads",
    stage: "CORE SKILLS & TECH",
    title: "Paid Ads & Social Growth",
    role: "Meta, Google, YT, Insta, LinkedIn",
    period: "High ROI Focus",
    category: "skills",
    icon: "Target",
    color: "#3b82f6",
    tag: "Performance Ads",
    badgeText: "Multi-Platform",
    summary:
      "Scaling brands with Meta & Google Ads, YouTube channel SEO, Instagram engagement, LinkedIn B2B growth, and local Google Business Profile dominance.",
    points: [
      "Meta Ads (Facebook & Instagram) Conversion Campaigns",
      "Google Ads (Search, Display, Video Ads)",
      "YouTube Channel SEO & Video Upload Workflows",
      "Google Business Profile 5-Star Local Presence"
    ],
    skills: ["Meta Ads", "Google Ads", "YouTube SEO", "Instagram", "LinkedIn", "GBP SEO"]
  },
  {
    id: "node-skill-rd",
    stage: "CORE SKILLS & TECH",
    title: "R&D & Operations Leadership",
    role: "Floor, Vendor & Inventory Ops",
    period: "1.5 Years Exp",
    category: "skills",
    icon: "Boxes",
    color: "#10b981",
    tag: "Operations",
    badgeText: "R&D Management",
    summary:
      "Leading market research, vendor sourcing and price negotiation, showroom sales floor synchronization, and inventory tracking.",
    points: [
      "R&D Market Research & Product Opportunity Analysis",
      "Vendor Sourcing, Printing & Merchandise Coordination",
      "Showroom Floor Management & Sales Coordination",
      "Inventory Management & Stock Tracking"
    ],
    skills: ["R&D Analysis", "Vendor Sourcing", "Showroom Floor", "Inventory Management"]
  },
  {
    id: "node-edu-dm",
    stage: "EDUCATION & COURSES",
    title: "Advanced Digital Marketing",
    role: "Professional Training (2021)",
    period: "Patna, Bihar",
    category: "education",
    icon: "Award",
    color: "#f59e0b",
    tag: "Certified Course",
    badgeText: "Academy Patna",
    summary:
      "Intensive practical training covering full-stack paid ads, SEO/SEM, analytics, sales funnels, and content operations.",
    points: [
      "Full-Funnel Digital Marketing Masterclass",
      "Practical Paid Ads Simulations & Campaign Scaling",
      "SEO, Web Analytics & Conversion Funnels"
    ],
    skills: ["Full Funnel Ads", "SEO", "Analytics", "Growth Strategy"]
  },
  {
    id: "node-edu-grad",
    stage: "EDUCATION & COURSES",
    title: "Graduation (Bachelor's Degree)",
    role: "R L S Y College, Bakhtiarpur",
    period: "2022 | Score: 61.1%",
    category: "education",
    icon: "GraduationCap",
    color: "#3b82f6",
    tag: "Pataliputra University",
    badgeText: "61.1% Score",
    summary: "Bachelor's degree from Pataliputra University with 61.1% graduation score.",
    points: [
      "Pataliputra University, Patna",
      "Graduation Completed in 2022",
      "Analytical & Strategic Foundation"
    ],
    skills: ["Critical Thinking", "Research", "Management Foundation"]
  },
  {
    id: "node-edu-school",
    stage: "EDUCATION & COURSES",
    title: "Intermediate & Matriculation",
    role: "+2 High School, Karjan",
    period: "2019 & 2016 | B.S.E.B",
    category: "education",
    icon: "BookOpen",
    color: "#8b5cf6",
    tag: "Bihar Board (BSEB)",
    badgeText: "Completed",
    summary: "Completed 10th (58%, 2016) and 12th Intermediate (41%, 2019) from +2 High School, Karjan under B.S.E.B.",
    points: [
      "Intermediate: +2 High School, Karjan (41%, 2019)",
      "Matriculation: +2 High School, Karjan (58%, 2016)",
      "Bihar School Examination Board (B.S.E.B)"
    ],
    skills: ["Schooling Foundation", "BSEB"]
  }
];
