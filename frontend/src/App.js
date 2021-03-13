import { Route, Switch } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import DisplayError from './components/Error/DisplayError'
import Footer from './components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={DisplayError} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
