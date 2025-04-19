import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePromotionsStore } from "../../../features/promotion.slice";
import { fetchSlider } from "../../../apis/promotion.api";
import { SlidesI } from "../../../types/promotion.type";
import SkeletonLoading from "../../common/SkeletonLoading/SkeletonLoading";

const Hero = () => {
  const { slides } = usePromotionsStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["sliders"],
    queryFn: fetchSlider,
    enabled: slides.length === 0,
    staleTime: Infinity,
  });

  // Skeleton mô phỏng Swiper
  if (isLoading && slides.length === 0) {
    return (
      <div className="relative h-64">
        {/* Placeholder cho hình ảnh */}
        <SkeletonLoading
          height="100%"
          width="100%"
          className="absolute inset-0"
        />
        {/* Placeholder cho pagination dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <SkeletonLoading key={i} circle width={12} height={12} />
          ))}
        </div>
      </div>
    );
  }

  // Không hiển thị lỗi vì 401 sẽ logout
  if (error) return null;

  const banners: SlidesI[] =
    slides.length > 0
      ? slides
      : Array.isArray(data)
        ? data
        : data
          ? [data]
          : [];

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {banners?.map((slide: SlidesI, index: number) => (
          <SwiperSlide key={index} className="inline-block">
            <picture className="block max-h-[80vh]">
              <source srcSet={slide.image} media="(max-width: 767px)" />
              <img
                src={slide.image}
                alt="Banner G"
                className="w-full h-full object-fill"
                loading="lazy"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
