"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";
import IconClose from "../icons/close-svgrepo-com.svg";
import Image from "next/image";
import Lightbox from "react-18-image-lightbox";
interface ModalContextType {
  isModalOpen: boolean;
  openModal: (content: any) => void;
  closeModal: () => void;
  openLightBox: (photo: any) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [content, setContent] = useState<any>();
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<any>();
  const openModal = (content: any) => {
    setContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const openLightBox = (photo: any) => {
    setPhoto(photo);
    setOpen(true);
  };
  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, openLightBox }}
    >
      {children}
      <Modal content={content} />{" "}
      {open && (
        <Lightbox mainSrc={photo} onCloseRequest={() => setOpen(false)} />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const Modal = ({ content }: any) => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
      >
        {content}

        <div className="modal-close" onClick={closeModal}>
          <Image src={IconClose} width={12} height={12} alt="Close Modal" />
        </div>
      </div>
    </div>
  );
};
