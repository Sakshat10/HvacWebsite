import { testimonials } from "@/content/home/testimaonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";

const TestimonialCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="flex items-center p-5">
            {/* Profile Image */}
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-black">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 p-4">{testimonial.comment}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
