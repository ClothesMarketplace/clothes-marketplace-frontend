import React, { useEffect } from "react";
import CabinetBackdrop from "../../components/commonComponents/CabinetBackdrop/CabinetBackdrop";
import Menu from "../../components/commonComponents/Menu/Menu";
import { useAppDispatch } from "../../redux/store";
import { openMenu } from "../../redux/additional/slice";

const CabinetPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(openMenu());
  }, [dispatch]);
  return (
    <div className="container">
      <CabinetBackdrop>
        <Menu />
      </CabinetBackdrop>
    </div>
  );
};

export default CabinetPage;
