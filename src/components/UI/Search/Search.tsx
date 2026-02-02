import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      className={styles.app__search}
      type="search"
      placeholder="Search note..."
      onChange={handleChange}
    />
  );
};

export default Search;
