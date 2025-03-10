"use client";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // Close the modal when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close the modal on pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/20 dark:bg-black/70 bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-[var(--background-secondary)] rounded-lg min-w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing the modal
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 md:p-4 border-b border-b-[var(--border)] rounded-t">
          <h3 className="text-xl font-semibold text-center w-full">{title}</h3>
          <button
            type="button"
            className="bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-white rounded-full cursor-pointer text-sm min-w-8 max-w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-toggle="crud-modal"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
