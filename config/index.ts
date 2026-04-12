import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "عبدالله | للبرمجة والتسويق الرقمي",
  description: "منصة عبدالله للبرمجة والتسويق الرقمي - تطبيقات جوال، أنظمة ويب، شات بوتات ذكية، وأتمتة الأعمال",
  keywords: [
    "برمجة",
    "تسويق رقمي",
    "تطبيقات جوال",
    "أتمتة",
    "شات بوت",
    "ذكاء اصطناعي",
    "مواقع ويب",
    "nextjs",
    "react",
    "flutter",
    "n8n",
    "make",
    "abdullah",
    "عبدالله",
  ] as Array<string>,
  authors: {
    name: "Abdullah",
    url: "https://github.com/abdullah-642",
  },
  icons: {
    icon: "/hero.png",
    apple: "/hero.png",
  },
} as const;
