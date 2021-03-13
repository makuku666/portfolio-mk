import ParticlesCanvas from '../../components/ParticlesCanvas'
import './About.scss'

const About = () => {
  return (
    <>
      <div className='aboutMe-wrapper'>
        <div className='aboutMe__head-image'></div>
        <div className='aboutMe__intro--box-blue'></div>
        <div className='aboutMe__intro-text-box'>
          {/* <h2 className="aboutMe__h2">You are in a hurry? Okay, let’s get straight to the point</h2 className="aboutMe__h2"> */}
          <h2 className='aboutMe__h2'>
            Who am I? Let’s get straight to the point
          </h2>
          <p className='aboutMe__p'>
            I am an open-minded, determined and solution-oriented programmer
            with a healthy dose of curiosity. My preference is for the front-end
            and I have a high awareness of quality. Solving challenging problems
            is also very appealing to me.
          </p>
        </div>

        <div className='aboutMe__leisure-text-box'>
          <h2 className='aboutMe__h2'>What{"'"}s there besides work?</h2>
          <p className='aboutMe__p'>
            I enjoy spending my free time diving. Especially free diving. When
            your mind starts drifting through the flow and you are just free
            falling...feels amazing.
          </p>
        </div>
        <div className='aboutMe__leisure--box-red'></div>

        <div className='aboutMe__dive-wrapper'>
          <div className='aboutMe__dive-wrapper--overlay'></div>
          <ParticlesCanvas />
        </div>
        <div className='aboutMe__career--box-yellow'></div>
        <div className='aboutMe__career-text-box'>
          {/* <h2 className="aboutMe__h2">You{"'"}ve got some time? Great, read my story.</h2 className="aboutMe__h2"> */}
          <h2 className='aboutMe__h2'>
            You{"'"}ve got some time? <br />
            Great, read my story of career changing.
          </h2>
          <p className='aboutMe__p'>
            Why have I left my engineering career behind to become a web
            developer?
          </p>
          <p className='aboutMe__p'>
            It all began at the end of 2015. It was a grey Thursday noon, when
            my former boss came to my desk and asked: {'"'}I heard, you would
            like to go abroad and work there. Could you imagine to set up and
            establish our new lab in China?{'"'} What an impact in my mind.{' '}
            <br />
            One month later I went on my first orientation trip to Ningbo in
            China. Three month later I was on my way there again. This time with
            two heavy luggage bags and a one-way ticket. My Chinese colleague
            and I were the new supervisors of the hardware test department. A
            new adventure had begun...
          </p>
          <p className='aboutMe__p'>
            Two to three years later our department had grown bigger and bigger
            as more projects were coming in each day. That was the first time I
            wished to create my own software to manage the distribution of
            resources among projects, because our regular spreadsheet tool wasn
            {"'"}t very good for tasks like that.
            <br /> I was a hardware test engineer and hence capable of
            programming whit LabView BUS communication interfaces and even do
            analysis with them. “So what?” I thought “Let’s try to create my own
            management system.”
          </p>
          <p className='aboutMe__p'>
            It took me more or less half a year to find out that the programming
            language I was using wasn’t strong enough to manage the front-end
            performance with satisfying results. Just the back-end including a
            small SQL database was possible. That outcome was super unsatisfying
            and therefore the pursuit of that idea was put on hold...
          </p>
          <p className='aboutMe__p'>
            ...as time moves on all good things must come to an end eventually,
            and I have had a wonderful time and made a lot of great experiences
            in those years. During that time, I{"'"}ve learned a lot about
            countless different aspects such as cultural and behavioral
            differences or team leading. I also underwent personal growth and in
            the very end learned to acknowledge when it is time to leave. We now
            had a good working team which was able to work on its own and even
            take over my former tasks. While, on one hand, my job there was
            still necessary to ensure the daily workflow, I on the other hand
            was now missing part of the reason why I wanted to do this job. I
            decided to resign from my position at the end of 2019 and took a
            sabbatical for a couple of months.
          </p>
          <p className='aboutMe__p'>
            The new corona situation overthrew my plans and forced me to decide
            on my next step quicker than I anticipated. Luckily, I met a very
            experienced senior full-stack web-developer who explained to me in
            depth what it means to be a web-developer and which programming
            languages are out there for which purpose.
            <br />
            And why do I want to become a web-developer now? <br />
            Well, I want to bring my own ideas to life and help others to do so,
            too. JavaScript is for me at this moment the best language to reach
            goals quickly on the front and back-end. Working independently from
            all over the world is another benefit that I would enjoy very much.
          </p>
        </div>
        <div className='aboutMe__career--box-blue'></div>
      </div>
    </>
  )
}

export default About
