import type { IconType } from "react-icons";
import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { Box, Braces, Cloud, Code2, Orbit, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export type SkillItem = {
  name: string;
  icon: IconType | LucideIcon;
  tone: string;
};

export type TechStackCategory = {
  title: string;
  items: SkillItem[];
};

export type ProjectItem = {
  title: string;
  category: string;
  image: string;
  preview?: string;
  alt: string;
  href: string;
  description: string;
  stats: string[];
  services: string[];
};

export type SocialItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const resumeHref = "/MohitPandey-Resume.pdf";

export const experience: ExperienceItem[] = [
  {
    period: "Feb 2026 - Aug 2026",
    role: "Frontend Developer",
    company: "Monkson Chart Pvt. Ltd.",
    description:
      "Building responsive websites, trading dashboards and headless ecommerce storefronts with React.js, Next.js, Tailwind CSS, Shopify Storefront API, Docker and Oracle Cloud.",
  },
  {
    period: "Aug 2025 - Jan 2026",
    role: "Frontend Developer",
    company: "GenZChat",
    description:
      "Developed an AI chat platform UI with reusable React components, JWT authentication, protected routes, REST API integrations, virtualization and pagination for large message datasets.",
  },
];

export const skills: SkillItem[] = [
  { name: "React", icon: SiReact, tone: "text-[#61dafb]" },
  { name: "Tailwind", icon: SiTailwindcss, tone: "text-[#38bdf8]" },
  { name: "Zustand", icon: Box, tone: "text-[#3d2d21]" },
  { name: "Next.js", icon: SiNextdotjs, tone: "text-[#111111]" },
  { name: "Shopify", icon: SiShopify, tone: "text-[#95bf47]" },
  { name: "AWS", icon: Cloud, tone: "text-[#ff9900]" },
  { name: "Docker", icon: SiDocker, tone: "text-[#2496ed]" },
  { name: "VS Code", icon: Code2, tone: "text-[#007acc]" },
  { name: "Antigravity", icon: Orbit, tone: "text-[#151515]" },
];

export const techStack: TechStackCategory[] = [
  {
    title: "Programming & Core",
    items: [
      { name: "JavaScript", icon: SiJavascript, tone: "text-[#f7df1e]" },
      { name: "MySQL", icon: SiMysql, tone: "text-[#00758f]" },
      { name: "OOPS", icon: Braces, tone: "text-[#2d8cff]" },
    ],
  },
  {
    title: "Frameworks & Web",
    items: [
      { name: "React.js", icon: SiReact, tone: "text-[#61dafb]" },
      { name: "Next.js", icon: SiNextdotjs, tone: "text-[#111111]" },
      { name: "Tailwind", icon: SiTailwindcss, tone: "text-[#38bdf8]" },
      { name: "Zustand", icon: Box, tone: "text-[#3d2d21]" },
      { name: "Shopify", icon: SiShopify, tone: "text-[#95bf47]" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: Cloud, tone: "text-[#ff9900]" },
      { name: "EC2", icon: Server, tone: "text-[#e78218]" },
      { name: "Docker", icon: SiDocker, tone: "text-[#2496ed]" },
      { name: "Git", icon: SiGit, tone: "text-[#f05032]" },
      { name: "Linux", icon: SiLinux, tone: "text-[#111111]" },
      { name: "Vercel", icon: SiVercel, tone: "text-[#111111]" },
    ],
  },
  {
    title: "Tools & IDEs",
    items: [
      { name: "VS Code", icon: Code2, tone: "text-[#007acc]" },
      { name: "Postman", icon: SiPostman, tone: "text-[#ff6c37]" },
      { name: "GitHub", icon: SiGithub, tone: "text-[#111111]" },
      { name: "Antigravity", icon: Orbit, tone: "text-[#151515]" },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "GenzChat",
    category: "AI Consumer App",
    image: "/images/project-genzchat-cover.png",
    preview: "/images/site-captures/genzchat-section-1.png",
    alt: "GenzChat homepage inspired cover showing AI smart replies",
    href: "https://genzchat.in/",
    description:
      "An AI chat wingman that helps people keep conversations alive with flirty, cheesy, funny and confident dating reply suggestions. The product picked up fast social traction, trending at number one on Twitter within half an hour and crossing 30K downloads in under six months.",
    stats: ["#1 Twitter trend", "30K+ downloads", "Under 6 months"],
    services: ["AI product UI", "Growth landing page", "Mobile-first flows"],
  },
  {
    title: "Monks On Chart Trade",
    category: "Trading Platform",
    image: "/images/project-trade-moc-cover.png",
    preview: "/images/site-captures/trade-moc-section-1.png",
    alt: "Monks On Chart trading dashboard inspired homepage cover",
    href: "https://trade.monksonchart.com/",
    description:
      "A chart-first trading workspace for Monks On Chart, shaped around quick market reading, signal discovery and a focused trade flow. The experience keeps the interface practical for users who need to scan, compare and act quickly.",
    stats: ["Trading terminal", "Chart-first UX", "Decision workflow"],
    services: ["Dashboard UI", "Trading flows", "Responsive web app"],
  },
  {
    title: "Monks On Chart",
    category: "Finance Website",
    image: "/images/project-moc-cover.png",
    preview: "/images/site-captures/moc-section-1.png",
    alt: "Monks On Chart website inspired homepage cover",
    href: "https://monksonchart.com/",
    description:
      "The public brand website for a trading education and market community. It introduces the Monks On Chart ecosystem, builds trust around the brand, and guides visitors toward learning resources and the trading platform.",
    stats: ["Brand website", "Trading education", "Community funnel"],
    services: ["Website design", "Content structure", "Lead journey"],
  },
  // {
  //   title: "Garnus India",
  //   category: "Ecommerce Website",
  //   image: "/images/project-garnus-cover.png",
  //   preview: "/images/site-captures/garnus-section-1.png",
  //   alt: "Garnus India handcrafted wooden essentials homepage cover",
  //   href: "https://garnusindia.com/",
  //   description:
  //     "A handcrafted wooden home and kitchen essentials store with a premium teakwood catalog. The site highlights artisan-made products, best sellers, collections, COD, free shipping and trust signals for more than 10,000 happy customers.",
  //   stats: ["10,000+ customers", "Teakwood catalog", "COD + shipping"],
  //   services: ["Ecommerce UI", "Product discovery", "Trust-led sections"],
  // },
  {
    title: "Shivalik Science Foundation",
    category: "NGO Website",
    image: "/images/project-shivalik-cover.png",
    preview: "/images/site-captures/shivalik-section-1.png",
    alt: "Shivalik Science Foundation homepage cover",
    href: "https://www.shivaliksciencefoundation.org/",
    description:
      "A children-focused science education NGO website for workshops, school engagement, impact storytelling, donations and volunteer action. The page frames practical learning and curiosity-led science programs with clear ways to get involved.",
    stats: ["Science workshops", "School programs", "Donate + volunteer"],
    services: ["NGO website", "Impact storytelling", "Program navigation"],
  },
];

export const socials: SocialItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-pandey-a6132a369", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:mohitpandey1703@gmail.com", icon: FaEnvelope },
  { label: "GitHub", href: "https://example.com/github", icon: FaGithub },
];
