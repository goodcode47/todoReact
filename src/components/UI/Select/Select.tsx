import styles from "./Select.module.css";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ value, onChange }: SelectProps) => {
  return (
    <select
      className={styles.app__select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
};

export default Select;
