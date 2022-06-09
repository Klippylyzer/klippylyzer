import cx from "ts-classnames";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ModalTitle({ className, children, ...props }: Props) {
  return (
    <h3
      className={cx("text-xl", "font-medium", "text-gray-900", "dark:text-gray-50", className as ClassNames)}
      {...props}
    >
      {children}
    </h3>
  );
}
