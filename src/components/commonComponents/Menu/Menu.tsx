import { closeMenu } from "../../../redux/additional/slice";
import { useAppDispatch } from "../../../redux/store";
import AuthButtonsGroup from "../../auth/AuthButtonsGroup/AuthButtonsGroup";
import CloseButton from "../CloseButton/CloseButton";
import css from "./Menu.module.css";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <div className={css.menu}>
      <CloseButton descr="close menu" externalHandleClick={handleCloseMenu} />
      <AuthButtonsGroup />
    </div>
  );
};

export default Menu;
