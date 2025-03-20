import clsx from "clsx";
import LoginSection from "../../components/auth/LoginSection/LoginSection";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/commonComponents/Loader/Loader";

const LoginPage: React.FC = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <div className={clsx("container", "authContainer")}>
      {isLoading ? <Loader /> : <LoginSection />}
    </div>
  );
};

export default LoginPage;
