import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '../data';

// Define the correct type for params
type Props = {
  params: Promise<{ id: string }>;
};

// Next.js static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);
  
  if (!post) {
    return {
      title: 'مقال غير موجود',
    };
  }

  return {
    title: `${post.title} | عبدالله AI`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 px-4 md:px-10 z-10 relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-900/10 via-[#030014] to-[#030014]"></div>
      
      <article className="z-10 w-full max-w-4xl mx-auto pt-20" dir="rtl">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-8 transition-colors group"
        >
          <i className="fas fa-arrow-right transition-transform group-hover:-translate-x-1"></i>
          العودة للمدونة
        </Link>
        
        {/* Header */}
        <header className="mb-10 text-center md:text-right">
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center md:justify-start gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <i className="fas fa-calendar-alt text-purple-500"></i>
              {new Date(post.date).toLocaleDateString('ar-SA')}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-user-edit text-cyan-500"></i>
              {post.author}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-[0_0_40px_rgba(112,66,248,0.2)] border border-[#2a0e61]">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content styled for Markdown/HTML */}
        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-h2:text-purple-400 prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12
          prose-h3:text-cyan-400 prose-h3:text-2xl prose-h3:mb-4
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-li:text-gray-300 prose-li:mb-2
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-purple-400 hover:prose-a:text-purple-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-[#2a0e61] flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            نُشر بواسطة <span className="text-white font-bold">{post.author}</span>
          </p>
          <span className="flex items-center gap-2 px-6 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/50 rounded-full">
            <i className="fas fa-check-circle"></i>
            حُرر بعناية
          </span>
        </div>
      </article>
    </div>
  );
}
