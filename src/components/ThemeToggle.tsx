
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle("light-mode", !newTheme);
    document.documentElement.classList.toggle("dark-mode", newTheme);
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
