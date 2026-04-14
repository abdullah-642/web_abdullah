import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "المدونة | مقالات عن الذكاء الاصطناعي وبرمجة التطبيقات",
  description: "اكتشف أحدث المقالات عن أدوات الذكاء الاصطناعي، برمجة تطبيقات الجوال، تطوير الويب، وأتمتة الأعمال باستخدام أحدث التقنيات.",
  keywords: ["مدونة ذكاء اصطناعي", "تعلم البرمجة", "تطوير الويب", "صناعة التطبيقات", "أتمتة", "ChatGPT"],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-32 px-4 md:px-10 z-10 relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030014] to-[#030014]"></div>
      
      <div className="z-10 w-full max-w-7xl flex flex-col items-center justify-center pt-20">
        <h1 className="text-[40px] md:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
          المدونة التقنية
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl text-center mb-16 leading-relaxed">
          اكتشف أحدث المقالات والأدوات في عالم الذكاء الاصطناعي، البرمجة، وأتمتة الأعمال.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" dir="rtl">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-[#0f0b29]/50 border border-[#2a0e61] rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b29] to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-[#2a0e61]/50">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-calendar-alt"></i>
                    {new Date(post.date).toLocaleDateString('ar-SA')}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-user"></i>
                    {post.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
