import Header from '@components/Header';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Hero = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      image: '/images/makina.jpg',
      title: 'Yatay Cam Kumlama Makinası',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio velit! Quasi repellat quisquam omnis ratione, ipsa harum accusamus voluptates consectetur aliquam repellendus pariatur ea dolorum, quas excepturi? Vel, voluptatibus.',
    },
    {
      image: '/images/makina.jpg',
      title: 'İkinci Makina Modeli',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio velit! Quasi repellat quisquam omnis ratione.',
    },
    {
      image: '/images/makina.jpg',
      title: 'Üçüncü Makina Modeli',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio velit!',
    },
  ];

  return (
    <div className='relative'>
      <img
        src='/images/hero.png'
        className='relative h-[400px] w-full rounded-2xl opacity-80 sm:h-[500px] md:h-[600px] lg:h-[650px]'
      />
      <div className='absolute inset-0 top-0 flex items-center justify-center rounded-2xl bg-gradient-to-b from-white via-white/60'>
        <div className='relative container mx-auto max-h-[400px] w-full translate-y-16 rounded-2xl pb-3 sm:max-h-[500px] sm:translate-y-24 md:max-h-[600px] md:translate-y-36 lg:max-h-[650px] lg:translate-y-52'>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            <div className='z-10 hidden items-center justify-center md:col-span-1 md:flex'>
              <FaArrowLeft
                onClick={() => swiperRef.current.slidePrev()}
                className='cursor-pointer rounded-full bg-[#1c9dd9] p-2 text-white duration-500 hover:bg-black md:p-3'
                size={32}
              />
            </div>

            <div className='col-span-4 h-[300px] px-4 sm:h-[400px] md:col-span-4 md:h-[500px] md:px-0 lg:col-span-6 lg:h-[600px]'>
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                className='h-full'
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className='grid h-full grid-rows-6 gap-2 md:gap-4'>
                      <div className='row-span-4 md:row-span-5'>
                        <img
                          src={slide.image}
                          className='h-full w-full rounded-2xl object-cover object-center'
                          alt={slide.title}
                        />
                      </div>
                      <div className='row-span-2 flex flex-col justify-center md:row-span-1'>
                        <p className='text-center text-xl font-semibold text-[#1c9dd9] sm:text-2xl md:text-3xl'>
                          {slide.title}
                        </p>
                        <p className='mt-2 line-clamp-2 text-center text-xs leading-relaxed font-medium sm:text-sm md:line-clamp-none'>
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='z-10 hidden items-center justify-center md:col-span-1 md:flex'>
              <FaArrowRight
                onClick={() => swiperRef.current.slideNext()}
                className='cursor-pointer rounded-full bg-[#1c9dd9] p-2 text-white duration-500 hover:bg-black md:p-3'
                size={32}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-0 w-full'>
        <Header />
      </div>
    </div>
  );
};

export default Hero;
