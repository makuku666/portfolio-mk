import { FiSettings } from 'react-icons/fi'
import './Skillcard.scss'

// Skill card backend
const CardBackend = () => {
  return (
    <div className='skillCard__wrapper skillCard__backend'>
      <FiSettings className='skillCard__icon' />
      <h2 className='skillCard__h2'>Back-End</h2>
      <ul className='skillCard__list'>
        <li className='skillCard__item'>Node.js</li>
        <li className='skillCard__item'>Express</li>
      </ul>
    </div>
  )
}
export default CardBackend
