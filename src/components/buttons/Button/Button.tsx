import css from "./Button.module.css";

// interface ButtonProps {
//   type?: "button" | "submit" | "reset";
//   text: string;
// }

// const Button: React.FC<ButtonProps> = ({ text, type }: ButtonProps) => {
//   return (
//     <button className={css.btn} type={type}>
//       {text}
//     </button>
//   );
// };

// export default Button;


type ButtonProps = {
  variant?: "primary" | "secondary";
  text: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const className = `${css.btn} ${
    variant === "primary" ? css.primary : css.secondary
  }`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
