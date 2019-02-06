import * as React from 'react';
import FilterContainer from '../containers/FilterContainer';
import ProductListContainer from '../containers/ProductListContainer';
import './Main.scss';

class Main extends React.Component {
    state = {
        filterVisible: false
    };

    handleFilterVisibleChange = () => {
        const { filterVisible } = this.state;
        this.setState({ filterVisible: !filterVisible });
    };

    handleClick = () => {
        const { filterVisible } = this.state;
        if (filterVisible) {
            this.setState({ filterVisible: false });
        }
    };

    render(): React.ReactNode {
        const { filterVisible } = this.state;

        return (
            <main
                className={`main${filterVisible ? ' main_obscured' : ''}`}
                onClick={() => this.handleClick()}
            >
                <div className="main__breadcrumbs">
                    Главная{' '}
                    <i className="fas fa-angle-right main__breadcrumbs_icon" />{' '}
                    Вафли
                </div>
                <div className="main__container">
                    <FilterContainer visible={filterVisible} />
                    <ProductListContainer
                        onFilterVisibleChange={this.handleFilterVisibleChange}
                    />
                </div>
            </main>
        );
    }
}

export default Main;
