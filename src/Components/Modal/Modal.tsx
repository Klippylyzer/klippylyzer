import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import cx from "ts-classnames";

import ModalBody from "./ModalBody";
import ModalContent from "./ModalContent";
import ModalContext from "./ModalContext";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";

const Sizes: Record<string, ClassNames[]> = {
  sm: ["max-w-md"],
  md: ["max-w-lg"],
  lg: ["max-w-4xl"],
  xl: ["max-w-7xl"],
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof Sizes;
  show: boolean;
  onClose?: () => void;
}

export default function Modal({
  size = "md",
  show = false,
  className,
  onClose,
  children,
  ...props
}: Props) {
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        tabIndex={-1}
        className={cx(
          "overflow-y-auto",
          "overflow-x-hidden",
          "fixed",
          "top-0",
          "right-0",
          "left-0",
          "z-50",
          "w-full",
          "md:inset-0",
          "md:h-full",
          "mx-auto",
          { hidden: !show }
        )}
      >
        <div
          className={cx(
            "relative",
            "p-4",
            "w-full",
            "h-full",
            "md:h-auto",
            "mx-auto",
            ...Sizes[size],
            className as ClassNames
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
}

Modal.Body = ModalBody;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
