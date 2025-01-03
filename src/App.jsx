
import './App.css'
import Blogform from './components/blog-form'
import {Routes , Route   } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Editblog from './components/edit-blog';
import Viewblog from './components/view-blog';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogform' element = {<Blogform />} />
      <Route path='/editeblog/:id' element = {<Editblog/>} />
      <Route path='/viewblog/:id' element = {<Viewblog/>} />
    </Routes>
    </>
  )
}

export default App
