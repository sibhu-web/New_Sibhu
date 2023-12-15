import './App.css';
// import About from './pages/about/about';
import Apprenticeship from './pages/services/apprenticeship/apprenticeship';
import Flexi from './pages/services/flexi-staffing/flexi';
import Manpower from './pages/services/manpower-outsourcing/manpower';
import Permanent from './pages/services/permanent-staffing/permanent';
// import Staffing from './pages/services/staffing/staffing';

function App() {
  return (
    <div className="App">
      {/* <Apprenticeship/> */}
      {/* <Staffing/> */}
      {/* <Permanent/> */}
      {/* <Flexi/> */}
      <Manpower/>
    </div>
  );
}

export default App;
