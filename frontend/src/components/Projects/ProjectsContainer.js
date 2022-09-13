import ImagesCarousel from '../ImagesCarousel'
import { myProjects } from './myProjects'
import { v4 as uuidv4 } from 'uuid'
import './ProjectsContainer.scss'

// Container of all user projects
const ProjectsContainer = () => {
  return (
    <ul className='project__list'>
      {myProjects.map((project) => {
        const { name, description, stack, link } = project
        const { src, carousel } = project.images

        // Single image or slider
        const imageWrapper = carousel ? (
          <ImagesCarousel images={src} />
        ) : (
          src.map((image) => (
            <img
              className='project__img'
              src={image}
              alt='project'
              key={uuidv4()}
            ></img>
          ))
        )

        return (
          // Create card
          <li className='project__item' key={uuidv4()}>
            <h3 className='project__h3'>{name}</h3>
            <div className='project__article'>
              <>
                {description.split('\n').map((p) => (
                  <p className='project__p project__description' key={uuidv4()}>
                    {p}
                  </p>
                ))}
              </>
              <p className='project__p project__tech'>{stack.join(' - ')}</p>

              {/* Don't render link if no link available */}
              {link.length === 0 ? (
                <>{imageWrapper}</>
              ) : (
                <a
                  className='project__a'
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p className='project__p'>Click for more</p>
                  <>{imageWrapper}</>
                </a>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectsContainer
