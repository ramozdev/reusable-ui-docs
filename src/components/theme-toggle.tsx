import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };
  // if (typeof window === "undefined") return null;

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
