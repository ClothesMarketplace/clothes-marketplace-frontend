import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Link to="/">LOGO</Link>
        <div>Категорії</div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header