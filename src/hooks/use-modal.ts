"use client";
import { useState, useCallback } from "react";

/**
 * Custom hook for managing modal state.
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Close the modal
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, openModal, closeModal };
};
