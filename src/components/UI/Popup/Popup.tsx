import Button from "../Button/Button";
import styles from "./Popup.module.css";
import { useState, useEffect } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveTodo: (text: string) => void;
  initialText?: string;
  mode: "add" | "edit";
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  onSaveTodo,
  initialText = "",
  mode,
}) => {
  const [inputValue, setInputValue] = useState(initialText);

  useEffect(() => {
    if (isOpen) {
      setInputValue(initialText);
    }
  }, [isOpen, initialText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSaveTodo(inputValue.trim());
      setInputValue("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popup}>
      <form className={styles.popup__form} onSubmit={handleSubmit}>
        <h2 className={styles.popup__heading}>
          {mode === "add" ? "New Note" : "Edit Note"}
        </h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.popup__input}
          type="text"
          placeholder="Input your note..."
          autoFocus
        />
        <div className={styles.popup__controlWrap}>
          <Button
            className={styles.popup__cancel}
            type="button"
            onClick={onClose}
            variant="close"
          >
            Cancel
          </Button>
          <Button className={styles.popup__add} type="submit" variant="apply">
            {mode === "add" ? "Add" : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
