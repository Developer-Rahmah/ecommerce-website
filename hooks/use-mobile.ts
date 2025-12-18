import { useState, useEffect } from "react";
import { checkMobileView } from "@/src/utils/helpers";

export const useMobileView = (breakpoint = 768) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(checkMobileView(breakpoint));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobileView;
};
