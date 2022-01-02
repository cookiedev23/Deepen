import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComp() {
  return (
    <div>
      <p className=" xl:text-xl pb-2 font-medium">In evidenza</p>
      <div className="rounded-lg w-full overflow-hidden">
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img src="https://wallpaperaccess.com/full/5650390.jpg" />
          </div>
          <div>
            <img src="https://wallpaperaccess.com/full/5650396.jpg" />
          </div>
          <div>
            <img src="https://wallpaperaccess.com/full/5650405.jpg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComp;
