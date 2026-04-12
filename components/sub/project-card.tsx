import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg border border-[#1a1035] bg-[#0a0518]/60 transition-all duration-300 hover:border-[#c4a1ff]/30 hover:bg-[#0a0518]/80"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-5" dir="rtl">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-[15px] text-[#b0aac0] leading-relaxed line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};
