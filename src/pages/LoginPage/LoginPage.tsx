import clsx from "clsx";
import LoginSection from "../../components/auth/LoginSection/LoginSection";

const LoginPage = () => {
  return (
    <div className={clsx("container", "authContainer")}>
      <LoginSection />
    </div>
  );
};

export default LoginPage;
