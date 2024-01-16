import IconLinkedin from '../../assets/images/logos/socialmedia/iconLinkedin.png'
import IconGit from '../../assets/images/logos/socialmedia/iconGit.png'
import './Footer.scss'

// Webpage footer
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__item'>
          <img className='footer__icon' src={IconLinkedin} alt='logo'></img>
          <a
            className='footer__a'
            href='https://www.linkedin.com/in/marcus-koch-webdeveloper '
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li className='footer__item'>
          <img className='footer__icon' src={IconGit} alt='logo'></img>
          <a
            className='footer__a'
            href='https://github.com/marcus-koch-fs-dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
