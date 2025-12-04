"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import SectionTitle from '../ui/sectionTitle'
import ProgressAndNatigation from '../ui/progressAndNatigation';
import BlogCard from '../ui/cards/blogCard';

const BlogSlider = ({ data, text_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };

    // Sort by date descending (newest first)
    const sortedData = [...data].sort((a, b) => {
        const parseDate = (dateStr) => {
            // Parse US format like "December 1, 2025" or "January 14, 2022"
            const [monthDay, year] = dateStr.split(', ');
            const parts = monthDay.split(' ');
            const monthName = parts[0];
            const day = parseInt(parts[1]);
            const fullYear = parseInt(year);
            
            const monthMap = {
                'January': 0, 'February': 1, 'March': 2, 'April': 3,
                'May': 4, 'June': 5, 'July': 6, 'August': 7,
                'September': 8, 'October': 9, 'November': 10, 'December': 11
            };
            
            return new Date(fullYear, monthMap[monthName], day);
        };
        
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        
        return dateB - dateA; // Descending order (newest first)
    });

    return (
        <Swiper
            spaceBetween={18}

            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                560: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 3
                },
                // 1400: {
                //     slidesPerView: 3
                // }
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            className=''
        >
            {
                sortedData.map(({ id, thumb, date, title, tag, link }) => {
                    return (
                        <SwiperSlide key={id}>
                            <BlogCard date={date} tag={tag} thumb={thumb} title={title} text_muted={text_muted} link={link} />
                        </SwiperSlide>
                    )
                })
            }
            <ProgressAndNatigation />
        </Swiper>
    )
}

export default BlogSlider