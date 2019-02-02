import * as React from 'react';
import './Header.scss';
// @ts-ignore
import magOnlineLogo from '../images/logo_magonline.png';

class Header extends React.Component {
    state = {
        sticky: false
    };

    handleScroll = () => this.setState({ sticky: window.scrollY > 64 });

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    render(): React.ReactNode {
        return (
            <header className="header">
                <div className="header__outer header__part">
                    <div className="header__outer-logo">
                        <img src={magOnlineLogo} alt="magonline" />
                    </div>
                    <a href="" className="header__outer-link">
                        <i className="fas fa-map-marker-alt header__outer-link-icon" />
                        Томск
                    </a>
                    <a href="" className="header__outer-link">
                        <i className="fas fa-user header__outer-link-icon" />
                        Себастьян Перейра
                    </a>
                    <a href="" className="header__outer-link">
                        <i className="fas fa-sign-out-alt header__outer-link-icon" />
                        Выход
                    </a>
                </div>
                <div className="header__main header__part">
                    <i className="fas fa-bars header__main-menu-icon" />
                    <div className="header__main-left">
                        <div className="header__main-left-logo header__main-flex-item-top" />
                        <div className="header__main-left-catalog header__main-flex-item-bottom">
                            <div className="header__main-left-catalog-button">
                                <i className="fas fa-th-large" />
                                Каталог
                                <i className="fas fa-angle-down" />
                            </div>
                        </div>
                    </div>
                    <div className="header__main-center">
                        <div className="header__main-center-top header__main-flex-item-top">
                            <a href="" className="header__main-center-top-link">
                                <i className="fas fa-star header__main-center-top-icon" />
                                Новинки
                            </a>
                            <a href="" className="header__main-center-top-link">
                                <i className="fas fa-tag header__main-center-top-icon" />
                                Хиты продаж
                            </a>
                            <div className="header__main-center-top-support">
                                <i className="fas fa-phone header__main-center-top-icon" />
                                <span className="header__main-center-top-support-wrapper">
                                    <p className="header__main-center-top-support-caption">
                                        Служба поддержки
                                    </p>
                                    <p className="header__main-center-top-support-number">
                                        8 800 250 5555
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="header__main-center-search header__main-flex-item-bottom">
                            <input
                                className="header__main-center-search-input"
                                type="search"
                                placeholder="Введите название товара"
                            />
                            <button className="header__main-center-search-button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                    <div className="header__main-right">
                        <div className="header__main-right-cart header__main-flex-item-top">
                            Моя корзина
                            <span className="header__main-right-cart-amount">
                                860
                            </span>
                        </div>
                        <div className="header__main-right-cart-sum header__main-flex-item-bottom">
                            53 974,10 ₽
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
