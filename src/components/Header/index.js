import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="tezakcha"></div>
            <div className="header">
            </div>
            <div className="hero">
                <a href='#home' className='link'>Скачать приложение <i className='bx bx-down-arrow-alt'></i> </a>
            </div>
        </div>
    );
};

export default Header;
