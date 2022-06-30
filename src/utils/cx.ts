import cx from "ts-classnames";

export type ClassNameVariants = Parameters<typeof cx>[0];
export default cx as (...args: ClassNameVariants[]) => ClassNames;
