import React from "react";

export const Icon = ({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width={`${size.toString()}px`}
      height={`${size.toString()}px`}
    >
      <title>{name}</title>
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </svg>
  );
};
