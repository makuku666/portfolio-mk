import ImageFlip from '../ImageFlip/ImageFlip'
import photoFront from '../../assets/images/pages/home/photoMe.jpg'
import photoBack from '../../assets/images/pages/home/meLijiang.jpg'
import './Header.scss'

// Homepage header
const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__flip-wrapper'>
          <ImageFlip front={photoFront} back={photoBack} />
        </div>
        <div className='header__text'>
          <h1 className='header__h1'>Welcome, I am Marcus Koch</h1>
        </div>
      </div>
      <div className='header__jobTitle'>
        <h2 className='header__h2'>Web Developer</h2>
      </div>
    </header>
  )
}

export default Header
