import { useEffect } from "react";

function cn(...inputs: (string | undefined | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export { cn };
// Mobile view detection helper
export const checkMobileView = (breakpoint = 768): boolean => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < breakpoint;
};

// Click outside detection hook
export const useClickOutside = (
  refs: React.RefObject<HTMLDivElement | null>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is outside all provided refs
      const isOutsideAll = refs.every(
        (ref) => ref.current && !ref.current.contains(target)
      );

      if (isOutsideAll) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};

// Escape key detection hook
export const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]);
};
