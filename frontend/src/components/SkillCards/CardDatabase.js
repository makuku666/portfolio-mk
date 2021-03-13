import { DiStreamline } from 'react-icons/di'
import './Skillcard.scss'

// Skill card database
const CardDatabase = () => {
  return (
    <div className='skillCard__wrapper skillCard__database'>
      <DiStreamline className='skillCard__icon' />
      <h2 className='skillCard__h2'>Database</h2>
      <ul className='skillCard__list'>
        <li className='skillCard__item'>PostgreSQL</li>
        <li className='skillCard__item'>MongoDb</li>
      </ul>
    </div>
  )
}

export default CardDatabase
