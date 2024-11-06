import Image from "next/image";
export type AvatarBaseProps = {
  src: string;
  alt: string;
  ariaLabel?: string;
  size: "sm" | "md" | "lg";
};
export function AvatarBase({ src, alt, ariaLabel, size }: AvatarBaseProps) {
  const sizeClass = {
    sm: "w-8",
    md: "w-14",
    lg: "w-20",
  }[size];

  const maskStyle = {
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskImage: `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e")`,
  };
  return (
    <div
      className={`relative block aspect-square ${sizeClass} overflow-hidden`}
      style={maskStyle}
    >
      <Image
        src={src}
        fill={true}
        sizes="100%"
        alt={alt}
        quality={100}
        aria-label={ariaLabel}
      />
    </div>
  );
}
