import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import makinaImage from '/images/makina.png';
import './HeroContact.css';

const HeroContact = () => {
    return (
        <div className='relative select-none flex items-center justify-center py-2 border-t border-white h-40 overflow-hidden'>
            <div className='marquee'>
                <div className='track'>
                    {[...Array(18)].map((_, index) => (
                        <div key={index} className='item'>
                            <img src={makinaImage} alt={`Slider Image ${index + 1}`} className='w-36 opacity-20 h-40 object-contain' />
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute select-none -top-1 right-1/2 translate-x-1/2 z-50 h-full flex items-center justify-center flex-col'>
                <p className='text-2xl font-light leading-relaxed text-black'>SEKTÖRDE</p>
                <p className='text-6xl font-semibold text-[#8BAFC4]'>21.YILIMIZ</p>
            </div>
        </div>
    );
};

export default HeroContact;