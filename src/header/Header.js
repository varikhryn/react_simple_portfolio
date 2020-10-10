import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='header__wrapper'>
                    <div className='header__item'>
                        <h1>Hryn Yaroslav</h1>
                    </div>

                    <div className='header__item'>
                        <h2>FrontEnd Developer</h2>
                    </div>

                    <div className='header__item header__contact'>
                        <a href='tel: +380930190229'
                        >
                            +38 (093) 019 02 29
                        </a>

                        <a href='mailto: y.yarikrhy@gmail.com'
                        >
                            y.yarikhryn@gmail.com
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;