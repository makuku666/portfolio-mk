import Header from '../../components/Header/Header'
import SkillcardsContainer from '../../components/SkillCards/SkillcardsContainer'
import ProjectsContainer from '../../components/Projects/ProjectsContainer'
import './Home.scss'

// Landing page
const Home = () => {
  return (
    <>
      <Header />
      <section className='home__section home__introduction'>
        <div className='home__intro-article'>
          <h2 className='home__h2'>Hi, glad seeing you here!</h2>
          <p className='home__p'>
            I underwent a change in my life from a test engineer to a web
            developer. Now I{"'"}m turning to become a full stack developer
            focused on the front-end. Creating awesome websites with React, that
            provide visitors with unique experiences that will make them want to
            return, is what I like doing.
          </p>
        </div>
      </section>
      <section className='home__section home__skillCards-wrapper'>
        <SkillcardsContainer />
      </section>
      <section className='home__section home__projects'>
        <div className='home__projects-article'>
          <h2 className='home__h2'>Projects</h2>
        </div>
        <div className='home__projects-wrapper'>
          <ProjectsContainer />
        </div>
      </section>
    </>
  )
}

export default Home
