import React, { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";

interface IButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'shadow';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface IButtonIconProps {
  src: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ variant, onClick, children, className }: IButtonProps) => {
  return (
    <button className={`btn-${variant ?? "primary"} ${variant !== "shadow" && "py-2 px-6"} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const ButtonIcon = ({ src, onClick, className }: IButtonIconProps) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <Image src={src} width={25} height={25} alt={"Button Icon"} />
    </button>
  )
}