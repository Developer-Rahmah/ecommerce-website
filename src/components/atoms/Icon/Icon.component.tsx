import type React from "react";
import Image from "next/image";
import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.css";

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = "currentColor",
  className = "",
}) => {
  const iconPath = `/icons/${name}.svg`;

  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={name || "/placeholder.svg"}
        alt={name}
        width={size}
        height={size}
        style={{ color }}
      />
    </span>
  );
};
