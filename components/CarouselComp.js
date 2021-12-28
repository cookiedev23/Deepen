import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComp() {
  return (
    <div className="rounded-lg w-full overflow-hidden">
      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
        <div>
          <img src="https://i1.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1" />
        </div>
        <div>
          <img src="https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg" />
        </div>
        <div>
          <img src="https://imlestar.files.wordpress.com/2019/12/70746-immagini-fantasy-gratis-pixabay.jpg?w=647" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
