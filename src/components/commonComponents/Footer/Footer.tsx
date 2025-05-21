import Logo from "../Logo/Logo";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className={css.footer}>
        <div className={css.wrapper}>
          <Logo forFooter classString="footerGrid" />
          <ul className={css.list}>
            <li>Довідковий центр.</li>
            <li>Умови використання.</li>
            <li>Політику конфіденційності.</li>
            <li>Контакти.</li>
            <li>Соціальні мережі</li>
          </ul>

          <div className={css.formWrap}>
            <h3>
              🔥 Ти в темі? Лови тренди, знижки та персональні призи —
              підписуйся!
            </h3>
            <form className={css.form}>
              <input
                className={css.input}
                type="text"
                placeholder="Твій email "
              />
              <button className={css.btn} type="submit">
                Так, хочу! 😎
              </button>
            </form>
          </div>
          <p className={css.copyright}>
            [DripCycle] © 2025 Тренди, знижки, вайб — тільки тут!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
