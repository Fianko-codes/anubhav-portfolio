
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    // Check localStorage for saved preference, default to dark if not found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  React.useEffect(() => {
    // Apply theme on mount and when it changes
    document.documentElement.classList.toggle("light-mode", !isDarkTheme);
    document.documentElement.classList.toggle("dark-mode", isDarkTheme);
    // Save preference
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch checked={isDarkTheme} onCheckedChange={toggleTheme} />
      <Moon className="h-4 w-4" />
    </div>
  );
};

export default ThemeToggle;
