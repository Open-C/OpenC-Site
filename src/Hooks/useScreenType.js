import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const is2cols = useMediaQuery({ minWidth: 800 });
  if (is2cols) return "2-cols";
  return "fullscreen";
};
