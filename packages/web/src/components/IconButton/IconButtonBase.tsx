"use client";
import { cssAnimation } from "@/utils/css-animation";

export type IconButtonBaseProps = {
  icon: React.ReactNode;
};
export function IconButtonBase({ icon }: IconButtonBaseProps) {
  return (
    <button
      id="waveButton"
      className="relative aspect-square overflow-hidden rounded-full  bg-white p-3 font-bold hover:bg-gray-200"
      onClick={(e) => cssAnimation.wave(e, { type: "rounded" })}
    >
      {icon}
    </button>
  );
}
