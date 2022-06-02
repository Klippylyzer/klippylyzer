import React from "react";
import cx from "ts-classnames";

const styles = {
  Base: cx(
    "focus:ring-4",
    "font-medium",
    // "mb-2",
    // "mr-2",
    "px-5",
    "py-2.5",
    "rounded-lg",
    "text-sm",
    "focus:outline-none"
  ),
  Default: cx(
    "text-white",
    "bg-blue-700",
    "hover:bg-blue-800",
    "focus:ring-blue-300",
    "dark:bg-blue-600",
    "dark:hover:bg-blue-700",
    "dark:focus:ring-blue-800"
  ),
  Alternative: cx(
    "focus:z-10",
    "text-gray-900",
    "bg-white",
    "border",
    "border-gray-200",
    "hover:bg-gray-100",
    "hover:text-blue-700",
    "focus:ring-gray-200",
    "dark:focus:ring-gray-700",
    "dark:bg-gray-800",
    "dark:text-gray-400",
    "dark:border-gray-600",
    "dark:hover:text-white",
    "dark:hover:bg-gray-700"
  ),
  Dark: cx(
    "text-white",
    "bg-gray-800",
    "hover:bg-gray-900",
    "focus:ring-gray-300",
    "dark:bg-gray-800",
    "dark:hover:bg-gray-700",
    "dark:focus:ring-gray-700",
    "dark:border-gray-700"
  ),
  Light: cx(
    "text-gray-900",
    "bg-white",
    "border",
    "border-gray-300",
    "hover:bg-gray-100",
    "focus:ring-gray-200",
    "dark:bg-gray-800",
    "dark:text-white",
    "dark:border-gray-600",
    "dark:hover:bg-gray-700",
    "dark:hover:border-gray-600",
    "dark:focus:ring-gray-700"
  ),
  Green: cx(
    "text-white",
    "bg-green-700",
    "hover:bg-green-800",
    "focus:ring-green-300",
    "dark:bg-green-600",
    "dark:hover:bg-green-700",
    "dark:focus:ring-green-800"
  ),
  Red: cx(
    "text-white",
    "bg-red-700",
    "hover:bg-red-800",
    "focus:ring-red-300",
    "dark:bg-red-600",
    "dark:hover:bg-red-700",
    "dark:focus:ring-red-900"
  ),
  Yellow: cx(
    "text-white",
    "bg-yellow-400",
    "hover:bg-yellow-500",
    "focus:ring-yellow-300",
    "dark:focus:ring-yellow-900"
  ),
  Purple: cx(
    "text-white",
    "bg-purple-700",
    "hover:bg-purple-800",
    "focus:ring-purple-300",
    "dark:bg-purple-600",
    "dark:hover:bg-purple-700",
    "dark:focus:ring-purple-900"
  ),
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  btn?: keyof typeof styles;
}

export default function Button({
  btn = "Default",
  className,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={cx(styles.Base, styles[btn], className)} {...props}>
      {children}
    </button>
  );
}
