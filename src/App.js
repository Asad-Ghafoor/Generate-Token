import react from 'react'
import Home from './Pages/Home';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regestration from './Pages/Regestration';
const App = () =>
{
  return(
    <>
       <Router>
       <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/regestration' element={<Regestration />} />
        </Routes>
       </Router>
    </>
  )
}
export default App;