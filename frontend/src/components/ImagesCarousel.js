import Slider from 'infinite-react-carousel'
import { v4 as uuidv4 } from 'uuid'

// Show images in a carousel
const CarouselProjectImages = ({ images }) => {
  const settings = {
    arrows: true,
    arrowsBlock: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: 0,
    // dots: true,
  }
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <img
            className='carousel__img'
            src={image}
            alt='project screenshot'
            key={uuidv4()}
          ></img>
        )
      })}
    </Slider>
  )
}
export default CarouselProjectImages
