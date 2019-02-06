import * as React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer__content">
            <p className="footer__line">
                <b>8 800 250 5555</b>
            </p>
            <p className="footer__line">
                <a className="footer__link" href="mailto:info@magonline.ru">
                    <b>info@magonline.ru</b>
                </a>
            </p>
            <div className="footer__copyright">
                <p className="footer__line">Россия, г. Томск, пр. Мира 20</p>
                <p className="footer__line">© 2019 ООО "МАГ Девелопмент"</p>
            </div>
        </div>
        <div className="footer__content-md">
            <div className="footer__content-md-row">
                <a className="footer__link" href="">
                    О магазине
                </a>
                <a className="footer__link" href="">
                    Бесплатная доставка
                </a>
                <a className="footer__link" href="">
                    Оплата
                </a>
            </div>
            <div className="footer__content-md-row">
                <a className="footer__link" href="">
                    Как купить
                </a>
                <a className="footer__link" href="">
                    Возврат и обмен
                </a>
                <a className="footer__link" href="">
                    Для юридических лиц
                </a>
            </div>
            <div className="footer__content-md-row">
                <a className="footer__link" href="">
                    Договор оферты
                </a>
                <a className="footer__link" href="">
                    Персональные данные
                </a>
                <a className="footer__link" href="">
                    Регламент
                </a>
            </div>
            <div className="footer__content-md-row">
                <p className="footer__line">
                    <b>Свяжитесь с нами</b>
                </p>
                <p className="footer__line">Россия, г. Томск, пр. Мира 20</p>
                <a className="footer__link" href="mailto:info@magonline.ru">
                    info@magonline.ru
                </a>
                <p className="footer__line">8 800 250 5555</p>
            </div>
            <span className="footer__copyright">
                © 2019 ООО "МАГ Девелопмент"
            </span>
        </div>
    </footer>
);

export default Footer;
