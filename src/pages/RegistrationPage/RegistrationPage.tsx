import { RegistrationForm } from "../../components/auth/RegistrationForm/RegistrationForm";
import RegistrationSection from "../../components/auth/RegistrationSection/RegistrationSection";

const RegistrationPage = () => {
  return (
    <div className="container">
      <RegistrationSection>
        <RegistrationForm />
      </RegistrationSection>
    </div>
  );
};

export default RegistrationPage;
