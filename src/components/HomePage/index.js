import React from 'react';
import iphone from '../../images/Apple iPhone 11 Pro Space Grey-1.png'
const HomePage = () => {
    return (
        <div className='bg-top1-2' id='home'>
            <div className="container1 flex items-center">
                <div className="left-side-home">
                    <h2 className="home-title text-7xl">Наше приложение</h2>
                    <p className="home-desc">
                        В данном приложении, вы можете оформить онлайн микро-кредит, для своих нужд.
                        Также в приложении вы можете оплатить контракт за учебу, оформив заявку. Больше функций вы можете узнать скачав приложение.
                    </p>
                </div>
                <div className="right-side-home">
                    <img src={iphone} alt="" className='img-iphone-home'/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;