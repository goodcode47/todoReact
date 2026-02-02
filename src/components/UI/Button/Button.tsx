import styles from "./Button.module.css";

interface ButtonProps {
  variant?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "",
  onClick,
  children,
  type = "button",
  className: externalClassName = ""
}) => {
  const internalClassName = variant ? styles[`app__${variant}`] : "";
  const combinedClassName = `${internalClassName} ${externalClassName}`.trim();

  return (
    <button className={combinedClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
