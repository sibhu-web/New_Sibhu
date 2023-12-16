
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Register from './pages/forms/register/register';
import Clint from './pages/clint/clint';
import Enquiry from './pages/Contact/enquiry';
import Details from './pages/Contact/details';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <br></br>
       <br></br>
       <br></br>
       <Home/>
      <Register/>
      <Details/>
      <Enquiry/>
      <Clint/>
       <Footer/>
    </div>
  );
}

export default App;
