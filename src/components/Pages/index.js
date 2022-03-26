import React from 'react';
import iphone1 from '../../images/credit_app-removebg-preview.png'
import iphone2 from '../../images/photo_2022-03-27_01.22.27-removebg-preview.png'
import appstore from '../../images/Download_on_the_App_Store_logo.png'
import googlestore from '../../images/2560px-Google_Play_Store_badge_EN.svg.png'
const Pages = () => {
    return (
        <div>
            <div className="container1 my-20">
                <h2 className='text-6xl text-center my-20'>Разделы в нашем приложении</h2>
                <div className="flex justify-center">
                    <img src={iphone2} alt="" className='img-iphone-home mx-20'/>
                    <img src={iphone1} alt="" className='img-iphone-home1'/>
                </div>
                <div className="download-links flex justify-center my-10">
                    <a href="https://www.apple.com/ru/app-store/" target='_blank'><img src={appstore} alt="" className='logo-store mx-10'/></a>
                    <a href="https://play.google.com/store/apps?hl=ru&gl=US" target='_blank'><img src={googlestore} alt="" className='logo-store'/></a>
                </div>
            </div>
        </div>
    );
};

export default Pages;