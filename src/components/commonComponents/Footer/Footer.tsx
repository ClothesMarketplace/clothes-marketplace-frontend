import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <h2>Footer</h2>
        <ul>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
