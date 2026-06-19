import React from 'react'
import { useSwiper } from 'swiper/react';
import RightArrow from '@/assets/icons/rightArrow';

const SwiperNavigation = () => {
    const swiper = useSwiper();

    return (
        <div className='flex items-center gap-[22px]'>
            <button
                type="button"
                onClick={() => swiper.slidePrev()}
                aria-label="Previous slide"
                className='text-primary-foreground rotate-180'
            >
                <RightArrow width={"35"} height={"22"} />
            </button>
            <button
                type="button"
                onClick={() => swiper.slideNext()}
                aria-label="Next slide"
                className='text-primary-foreground'
            >
                <RightArrow width={"35"} height={"22"} />
            </button>
        </div>
    )
}

export default SwiperNavigation
