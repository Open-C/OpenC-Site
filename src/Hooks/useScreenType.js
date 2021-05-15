import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isLarge = useMediaQuery({ minWidth: 1440 });
  const isMed = useMediaQuery({ minWidth: 1265 });
  const isSmall = useMediaQuery({ minWidth: 800 });
  if (isLarge) return "large";
  if (isMed) return "medium";
  if (isSmall) return "small";
  return "fullscreen";
};
