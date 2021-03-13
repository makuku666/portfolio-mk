import './ImageFlip.scss'

// Flip two images vertical
const ImageFlip = ({ front, back }) => {
  return (
    <div className='flip__container'>
      <div className='flip__container-inner'>
        <figure className='flip__figure'>
          <img
            className='flip__img flip__img--front'
            src={front}
            alt='imageFlip'
          />
        </figure>
        <figcaption className='flip__figcaption'>
          <img
            className='flip__img flip__img--back'
            src={back}
            alt='imageFlip'
          />
        </figcaption>
      </div>
    </div>
  )
}

export default ImageFlip
