import Image from "next/image";

interface PageBackgroundProps {
  imagePath: string;
}

export default function PageBackground({ imagePath }: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#18272E] via-transparent to-[#18272E]"></div>
      <Image
        src={imagePath}
        alt="Page Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
