import styles from "./Navigation.module.css";
import Search from "../UI/Search/Search";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

interface NavigationProps {
  onSearch: (searchString: string) => void;
  selectedValue: string;
  onSelectChange: (value: string) => void;
}

const Navigation = ({
  onSearch,
  selectedValue,
  onSelectChange,
}: NavigationProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav className={styles.app__navigation}>
      <Search onSearch={onSearch} />
      <Select value={selectedValue} onChange={onSelectChange} />
      <Button
        variant="themeChange"
        className="themeChange"
        onClick={handleThemeToggle}
      />
    </nav>
  );
};

export default Navigation;
