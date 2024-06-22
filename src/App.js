
// import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import PageOne from './Components/Pageones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        {/* <Sidebar /> */}
        <Route path={"/pageone"}  element={<MainContent />}>
        </Route>
        <Route path='/' element={<PageOne/>}></Route>
       {/* Render the PageOne component */}
      
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
