import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (value: string) => void;
  className?: string;
}

const Search = ({ onSearch, className }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  const searchClass = `${styles.search} ${className}`;

  return (
    <input
      className={searchClass}
      type="search"
      placeholder="Search note..."
      onChange={handleChange}
    />
  );
};

export default Search;
