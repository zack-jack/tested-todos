import { useTheme } from "next-themes";
import NextImage from "next/image";
import * as React from "react";

const ThemeToggle = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      aria-label={`apply ${theme === "light" ? "dark" : "light"} mode`}
      type="button"
      className="w-6 h-6"
      onClick={handleChangeTheme}
    >
      <NextImage
        alt={theme === "light" ? "moon icon" : "sun icon"}
        src={`/assets/icons/icon-${theme === "light" ? "moon" : "sun"}.svg`}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ThemeToggle;
