
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Movies from './components/Movies/Movies'
import MovieDetail from './Pages/MovieDetail/MovieDetail'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<MovieDetail/>}></Route>
        <Route path='movies/:type' element={<Movies/>}></Route>
      </Routes>
    </>
  )
}

export default App
