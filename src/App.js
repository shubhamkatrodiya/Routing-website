import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




  // routing

// import Navbar1 from './Component/Navbar1';
// import Slider from './Component/Slider';
// import Footer from './Component/Footer';
// import People from './Component/People';
import Home from './Component/Home';
import About from './Component/About';
import Project from './Component/Project';
import Service from './Component/Service';
import { Route ,Routes} from 'react-router-dom';
import Contact from './Component/Contact';



function App() {

  return (

    <>

      <div className='App'>


        {/* <About /> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </div>

     {/* <Navbar1/> */}
      {/* <Slider/> */}
      {/* <People/> */}

      {/* <About/> */}

      {/* full service */}

      {/* <Home/> */}

      {/* footer */}

      {/* <Footer/> */}

      {/* <Service/> */}

      {/* <Project/> */}

      {/* <Contact/> */}
    </>

  );
}

export default App;
