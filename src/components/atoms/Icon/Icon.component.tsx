import type React from "react";
import Image from "next/image";
import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.css";
import iconsObject from "@/src/assets/icons/iconsObject";

export const Icon: React.FC<IconProps> = ({
  name,
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{ width: width, height: height }}
    >
      <Image
        src={name || iconsObject.placeholder}
        alt={name}
        width={width}
        height={height}
      />
    </span>
  );
};
