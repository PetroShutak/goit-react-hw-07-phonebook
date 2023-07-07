import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.footer__text}>
        © 2023 Phonebook. All rights reserved. Created by{' '}
        <a
          className={css.footer__link}
          href="https://www.linkedin.com/in/petroshutak/"
        >
          Petro Shutak
        </a>
      </p>
    </footer>
  );
};

export default Footer;
