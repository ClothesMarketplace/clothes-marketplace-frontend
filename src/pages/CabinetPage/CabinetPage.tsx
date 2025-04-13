import React from "react";
import CabinetOverlay from "../../components/commonComponents/CabinetOverlay/CabinetOverlay";
import Menu from "../../components/commonComponents/Menu/Menu";

const CabinetPage: React.FC = () => {
  return (
    <div className="container">
      <CabinetOverlay>
        <Menu />
      </CabinetOverlay>
    </div>
  );
};

export default CabinetPage;
