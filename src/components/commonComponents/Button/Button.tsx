import css from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, type }: ButtonProps) => {
  return (
    <button className={css.btn} type={type}>
      {text}
    </button>
  );
};

export default Button;
