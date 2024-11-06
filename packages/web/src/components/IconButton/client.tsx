"use client";
import { IconButtonBase } from "./IconButtonBase";
import type { IconButtonBaseProps } from "./IconButtonBase";
type IconButtonProps = IconButtonBaseProps & {
  onClick: () => void;
};
export function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <div onClick={onClick}>
      <IconButtonBase icon={icon} />
    </div>
  );
}
