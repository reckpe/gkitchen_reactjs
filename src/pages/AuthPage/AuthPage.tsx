import { useSearch } from "@tanstack/react-router";
import BGRegister from "../../assets/images/register/bg-register.jpg"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import { sliderRegister } from "../../constants/layout";

const AuthPage = () => {
  const search = useSearch({ from: "/auth" });
  const tab = search.tab || "login";

  console.log(tab)

  return <div className="w-full h-full">
    <div className="flex flex-wrap w-full h-full">
        <div className="md:w-1/2 w-full flexCenter min-h-screen" style={{background: `url(${BGRegister}) no-repeat center center / cover`}}>
        <Carousel>
            <CarouselContent>
                {
                    sliderRegister.map((slide: string, index:number) => (
                        <CarouselItem key={index} className="inline-block w-full">
                            <div className="flexCenter w-full h-full">
                            <img src={slide} alt="Slide" className="w-full h-[480px] object-contain" />
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
        </div>
        <div className="md:w-1/2 w-full"></div>
    </div>
  </div>;
};

export default AuthPage;
