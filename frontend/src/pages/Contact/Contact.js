import './Contact.scss'

// Webpage farewell
const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact__text-box'>
        <p className='contact__p'>
          Thank you for visiting my website. If you would like to leave a
          message you can reach me under my email address
        </p>
        <a
          className='contact__a contact__a--hover'
          href='mailto:koch.marcus01@gmail.com'
        >
          koch.marcus01@gmail.com
        </a>

        <p className='contact__p'>
          You can also find me on Github or LinkedIn.
        </p>
        <p className='contact__p'>Looking forward to hear from you!</p>
        <p className='contact__p'>Greetings Marcus</p>
      </div>
    </div>
  )
}

export default Contact
