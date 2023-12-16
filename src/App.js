import './App.css';
// import NAPS from './pages/Services/NAPS/NAPS';
import NATS from './pages/services/NATS/NATS';
import About from './pages/about/about';
import Apprenticeship from './pages/services/apprenticeship/apprenticeship';
import Flexi from './pages/services/flexi-staffing/flexi';
import Manpower from './pages/services/manpower-outsourcing/manpower';
import Permanent from './pages/services/permanent-staffing/permanent';
import Staffing from './pages/services/staffing/staffing';

function App() {
  return (
    <div className="App">
      <Apprenticeship/> 
      <Staffing/> 
      <Permanent/> 
      <Flexi/>
       <Manpower/>
       {/* <NAPS/> */}
      <NATS/>
    </div>
  );
}

export default App;
