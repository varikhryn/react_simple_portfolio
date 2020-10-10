import React from 'react';
import './Footer.css';
import instagram_img from './instagram.png';
import facebook_img from './facebook.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <a href='tel: +380930190229'
                        >
                            +38 (093) 019 02 29
                        </a>

                        <a href='mailto: y.yarikrhy@gmail.com'
                        >
                            y.yarikhryn@gmail.com
                        </a>
                    </div>


                    <div className="footer__item">
                        <a
                            href='https://www.instagram.com/varikhryn/'
                        >
                            <img src={instagram_img} alt="instagram" />
                        </a>

                        <a
                            href='https://www.facebook.com/profile.php?id=100010919946369'
                        >
                            <img src={facebook_img} alt="facebook" />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;