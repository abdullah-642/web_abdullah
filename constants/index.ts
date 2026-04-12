import { FaYoutube, FaTiktok } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://youtube.com/@aboodix1717?si=caOt_gmdeBZwijh9",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@abdullah_ai2030?_r=1&_t=ZS-95TH06jB9Vt",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/abdullah_ai02?igsh=MW9paTlhemtvYmRmbQ%3D%3D&utm_source=qr",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "تطبيق توصيل طلبات متكامل",
    description:
      "تطبيق متكامل لإدارة التوصيل مع تتبع حي للسائقين على الخريطة، إشعارات فورية، ونظام تقييم. بنيته ليدعم التاجر، العميل، والسائق لضمان أفضل تجربة للمستخدم بأحدث التقنيات.",
    image: "/projects/delivery_app.png",
    link: "https://wa.me/966541428814",
  },
  {
    title: "مساعد الذكاء الاصطناعي والأتمتة",
    description:
      "شات بوت ذكي مدمج مع الواتساب وتيلجرام لتقديم خدمات الرد الآلي المتقدمة. يقوم بأتمتة خدمة العملاء، وجدولة المواعيد، وتقديم استشارات باستخدام أحدث نماذج توليد النصوص المتقدمة.",
    image: "/projects/ai_chatbot.png",
    link: "https://wa.me/966541428814",
  },
  {
    title: "نظام إدارة مطاعم شامل (ERP)",
    description:
      "نظام لوحة تحكم (POS) شامل مصمم لتسهيل المهام التشغيلية كالطلب من نقاط البيع، إدارة الطاولات، تتبع المبيعات وتقاريرها الدقيقة، بالإضافة إلى إدارة المخزون والموظفين بسلاسة تامة.",
    image: "/projects/restaurant_pos.png",
    link: "https://wa.me/966541428814",
  },
  {
    title: "منصة تجارة إلكترونية B2B",
    description:
      "متجر إلكتروني متقدم لقطاع الأعمال مبرمج بـ Next.js و Node.js يدعم تعدد البائعين، وبوابات دفع إلكتروني آمنة، بالإضافة للوحة تحكم مخصصة لإدارة العمليات والمبيعات.",
    image: "/projects/b2b_ecommerce.png",
    link: "https://wa.me/966541428814",
  },
  {
    title: "أتمتة سير العمل بـ n8n و Make",
    description:
      "ربط الأنظمة ببعضها (CRM مع الواتساب وأنظمة الفوترة). يقوم النظام تلقائياً باستقبال بيانات العميل، إصدار فاتورة، وإرسالها عبر الواتساب بدون تدخل بشري لتوفير الوقت والجهد.",
    image: "/projects/workflow_automation.png",
    link: "https://wa.me/966541428814",
  },
  {
    title: "تطبيق حجز عيادات طبية",
    description:
      "تطبيق جوال Flutter يسمح للمرضى بحجز المواعيد واستشارة الأطباء عن بعد. يتضمن نظام دفع مسبق، ومتابعة التاريخ الطبي، وتنبيهات فورية للمرضى قبل الموعد.",
    image: "/projects/medical_booking.png",
    link: "https://wa.me/966541428814",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "تواصل معي",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@aboodix1717?si=caOt_gmdeBZwijh9",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        link: "https://www.tiktok.com/@abdullah_ai2030?_r=1&_t=ZS-95TH06jB9Vt",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/abdullah_ai02?igsh=MW9paTlhemtvYmRmbQ%3D%3D&utm_source=qr",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "من أنا",
    link: "#about-me",
  },
  {
    title: "المهارات",
    link: "#skills",
  },
  {
    title: "مشاريعي",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://wa.me/966541428814",
};
