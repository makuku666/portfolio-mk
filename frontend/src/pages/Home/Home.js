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
          <h2 className='home__h2'>{`Hi, glad seeing you here!`}</h2>
          <p className='home__p'>
            {`I'm a test engineer & web developer and this combination is pretty
            cool. With LabView I can establish a communication with actuators
            via interfaces like LIN and CAN bus close to the hardware. I can
            read back their data and persist it in a database. With the help of
            Node.js and React.js, I can build high-performance web applications,
            process the persistent data and then make it available worldwide.
            It's fascinating how hardware and software can merge. `}
          </p>
        </div>
      </section>
      <section className='home__section home__skillCards-wrapper'>
        <SkillcardsContainer />
      </section>
      <section className='home__section home__projects'>
        <div className='home__projects-article'>
          <h2 className='home__h2'>{`Projects`}</h2>
        </div>
        <div className='home__projects-wrapper'>
          <ProjectsContainer />
        </div>
      </section>
    </>
  )
}

export default Home
