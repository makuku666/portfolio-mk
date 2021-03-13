import CardFrontend from './CardFrontend'
import CardBackend from './CardBackend'
import CardDatabase from './CardDatabase'
import CardDeployment from './CardDeployment'
import './SkillcardsContainer.scss'

// These function creates a container with all user skill cards
const SkillcardsContainer = () => {
  return (
    <div className='skillCards__container'>
      <ul className='skillCards__list'>
        <li className='skillCards__item'>
          <CardFrontend className='skillCards__card' />
        </li>
        <li className='skillCards__item'>
          <CardBackend className='skillCards__card' />
        </li>
        <li className='skillCards__item'>
          <CardDatabase className='skillCards__card' />
        </li>
        <li className='skillCards__item'>
          <CardDeployment className='skillCards__card' />
        </li>
      </ul>
    </div>
  )
}

export default SkillcardsContainer
