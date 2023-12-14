import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image1,
  image2,
  link,
  techs,
}: {
  title: string;
  description: string;
  image1: string;
  image2: string;
  link: string;
  techs: string[];
}) {
  return (
    <a target="_blank" href={link}>
      <div className="flex flex-col gap-2 rounded border border-mid bg-darky p-2 transition-colors hover:border-light">
        <h2 className="text-xl uppercase">{title}</h2>
        <ul className="flex flex-wrap gap-1">
          {techs.sort().map((tech, i) => (
            <li
              className="rounded border border-mid px-1 text-sm uppercase text-lighty"
              key={i}
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-light">{description}</p>
        <div className="relative grid w-full gap-2 sm:grid-cols-2">
          <div className="relative aspect-[16/10]">
            <Image
              src={image2}
              alt="Project cover"
              fill={true}
              className="overflow-hidden rounded object-cover object-left-top"
            />
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src={image1}
              alt="Project cover"
              fill={true}
              className="overflow-hidden rounded object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
