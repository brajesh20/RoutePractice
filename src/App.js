import './App.css'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Support from './Components/Support'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import MainHeader from './Components/MainHeader'

function App () {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/gallery'>Gallery</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/support' element={<Support />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
