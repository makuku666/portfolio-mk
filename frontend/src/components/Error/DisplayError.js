import photo1 from '../../assets/images/error/desert.JPG'
import './DisplayError.scss'

// Render page in error case
const DisplayError = () => {
  return (
    //Take error message and display it
    <div className='error-container'>
      <div className='error__message-box'>
        <img className='error__img' src={photo1} alt='err' />
        <div className='error__message'>
          <h1 className='error__h1'>404</h1>
          <h1 className='error__h1'>An error has occurred</h1>
          <h2 className='error__h2'>Be calm and relax, it could be harder.</h2>
        </div>
      </div>
    </div>
  )
}
export default DisplayError
