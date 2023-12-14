
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Register from './pages/forms/register/register';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <br></br>
       <br></br>
       <br></br>
       <Home/>
      <Register/>
       <Footer/>
    </div>
  );
}

export default App;
