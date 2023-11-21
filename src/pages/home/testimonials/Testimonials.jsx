import SectionTitle from "../../../shared-components/section-title/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import Rating from "react-rating";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <section className="mt-20">
            <SectionTitle heading="TESTIMONIALS" subHeading="What Our Clients Say" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="m-20 flex flex-col items-center gap-3">
                            <Rating
                                initialRating={review.rating}
                                
                                readonly
                            />
                            <p>{review.details}</p>
                            <h4 className="text-orange-400 text-2xl">{review.name}</h4>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;