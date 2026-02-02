import styles from "./Navigation.module.css";
import Search from "../UI/Search/Search";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

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
  return (
    <nav className={styles.app__navigation}>
      <Search onSearch={onSearch} />
      <Select value={selectedValue} onChange={onSelectChange} />
      <Button variant="theme-change" />
    </nav>
  );
};

export default Navigation;
