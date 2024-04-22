"use client";
import Image from "next/image";
import { useModal } from "@/providers/modal";

type ProjectsThumbProps = {
  thumb: string;
  title: string;
  index: number;
};

export default function ProjectsThumb({
  title,
  index,
  thumb,
}: ProjectsThumbProps) {
  const { openLightBox } = useModal();
  return (
    <Image
      alt={`${title}_${index}`}
      className="project-image"
      src={thumb}
      width={200}
      height={120}
      style={{
        overflow: "hidden",
        width: 200,
        height: 120,
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "0.5rem",
        border: "1px solid #ccc",
        margin: "0.5rem",
      }}
      onClick={() => {
        openLightBox(thumb);
      }}
    />
  );
}
