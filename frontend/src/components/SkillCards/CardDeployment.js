import { DiGitCompare } from 'react-icons/di'
import './Skillcard.scss'

// Skill card deployment
const CardDeployment = () => {
  return (
    <div className='skillCard__wrapper skillCard__deployment'>
      <DiGitCompare className='skillCard__icon' />
      <h2 className='skillCard__h2'>Deployment</h2>
      <ul className='skillCard__list'>
        <li className='skillCard__item'>Git | GitHub</li>
        <li className='skillCard__item'>CI | CD</li>
      </ul>
    </div>
  )
}
export default CardDeployment
