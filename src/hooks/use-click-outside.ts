import { useEffect, useCallback } from "react";

// Updated hook to handle clicks outside both the dropdown and the trigger button
const useClickOutside = (
  dropdownRef: React.RefObject<HTMLElement | null>,
  buttonRef: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Check if the click is outside both the dropdown and the button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    },
    [dropdownRef, buttonRef, callback]
  );

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
