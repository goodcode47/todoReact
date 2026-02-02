import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.app__header}>
      <h1 className={styles.app__heading}>Todo list</h1>
    </header>
  );
};

export default Header;
