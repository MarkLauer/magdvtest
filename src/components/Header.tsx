import * as React from 'react';
import './Header.scss';
// @ts-ignore
import magOnlineLogo from '../images/logo_magonline.png';

interface Props {
    cartAmount: number;
    cartTotal: number;
}

class Header extends React.Component<Props> {
    state = {
        sticky: false
    };

    handleScroll = () => {
        this.setState({ sticky: window.pageYOffset > 160 - 64 });
    };

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(): React.ReactNode {
        const { cartAmount, cartTotal } = this.props;
        const { sticky } = this.state;

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
                <div
                    className={`header__main header__part${
                        sticky ? ' header__main_sticky' : ''
                    }`}
                >
                    <div
                        className={`header__main-top${
                            sticky ? ' header__main-top_sticky' : ''
                        }`}
                    >
                        <i className="fas fa-bars header__main-top-menu-icon" />
                        <div className="header__main-top-logo" />
                        <div className="header__main-top-info">
                            <a href="" className="header__main-top-info-link">
                                <i className="fas fa-star header__main-top-info-link-icon" />
                                Новинки
                            </a>
                            <a href="" className="header__main-top-info-link">
                                <i className="fas fa-tag header__main-top-info-link-icon" />
                                Хиты продаж
                            </a>
                            <div className="header__main-top-info-support">
                                <i className="fas fa-phone header__main-top-info-link-icon" />
                                <span className="header__main-top-info-support">
                                    <p className="header__main-top-info-support-caption">
                                        Служба поддержки
                                    </p>
                                    <p className="header__main-top-info-support-number">
                                        8 800 250 5555
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="header__main-top-cart">
                            <span className="header__main-top-cart-link">
                                <i className="fas fa-shopping-basket header__main-top-cart-link-icon" />
                                Моя корзина
                                {cartAmount > 0 && (
                                    <span className="header__main-top-cart-amount header__cart-amount">
                                        {cartAmount}
                                    </span>
                                )}
                            </span>
                            <i className="fas fa-chevron-circle-down header__main-top-cart-button" />
                        </div>
                    </div>
                    <div className="header__main-bottom">
                        <div className="header__main-bottom-catalog">
                            <div className="header__main-bottom-catalog-button">
                                <i className="fas fa-th-large" />
                                Каталог
                                <i className="fas fa-angle-down" />
                            </div>
                        </div>
                        <div className="header__main-bottom-search">
                            <input
                                className="header__main-bottom-search-input"
                                type="search"
                                placeholder="Введите название товара"
                            />
                            <span className="header__main-bottom-search-category">
                                Категории{' '}
                                <i className="fas fa-angle-down header__main-bottom-search-category-arrow" />
                            </span>
                            <button className="header__main-bottom-search-button">
                                <i className="fas fa-search header__main-bottom-search-button-icon" />
                                <span className="header__main-bottom-search-button-text">
                                    Поиск
                                </span>
                            </button>
                        </div>
                        <div
                            className={`header__main-bottom-cart${
                                cartAmount === 0
                                    ? ' header__main-bottom-cart_empty'
                                    : ''
                            }`}
                        >
                            <span className="header__main-bottom-cart-amount-xl">
                                {cartAmount
                                    ? `${cartAmount} тов.`
                                    : 'Корзина пока пуста'}
                            </span>
                            <span className="header__main-bottom-cart-value">
                                {cartTotal > 0 &&
                                    cartTotal
                                        .toFixed(2)
                                        .replace(/\d(?=(\d{3})+\.)/g, '$& ') +
                                        ' ₽'}
                                {cartAmount > 0 && sticky && (
                                    <span className="header__main-bottom-cart-amount header__cart-amount">
                                        {cartAmount}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
