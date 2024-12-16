import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
};

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

export const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children }, ref) => {
    const [isShow, setIsShow] = useState(false);

    const openModal = () => {
      setIsShow(true);
    };

    const closeModal = () => {
      setIsShow(false);
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          openModal,
          closeModal,
        };
      },
      []
    );

    return (
      <>
        {isShow &&
          createPortal(
            <div
              className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 flex justify-center items-center"
              data-name="background"
              onClick={(e) =>
                e.target.dataset["name"] === "background" && setIsShow(false)
              }
            >
              {children}
            </div>,
            document.getElementById("portal")!
          )}
      </>
    );
  }
);
