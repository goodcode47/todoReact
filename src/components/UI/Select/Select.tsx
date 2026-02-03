import styles from "./Select.module.css";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ value, onChange }: SelectProps) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option className="selectOption" value="all">
        All
      </option>
      <option className="selectOption" value="complete">
        Complete
      </option>
      <option className="selectOption" value="incomplete">
        Incomplete
      </option>
    </select>
  );
};

export default Select;
