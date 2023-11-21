import FoodCard from "../../../shared-components/food-card/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


const OrderTabContent = ({ items }) => {
    const itemPerSlier = 4;
    const totalSlide = Math.ceil(items.length / itemPerSlier);
    console.log({ totalSlide });
    const totalSlideArray = [...Array(totalSlide).keys()];
    console.log({ totalSlideArray });
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    totalSlideArray.map(slideIndex => {
                        const start = slideIndex * itemPerSlier;
                        const end = start + 4;
                        return (
                            <SwiperSlide key={slideIndex}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    {
                                        items.slice(start, end).map(item => <FoodCard
                                            key={item._id}
                                            itemData={item}
                                        />)
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
            </Swiper>
        </div>
    );
};

export default OrderTabContent;