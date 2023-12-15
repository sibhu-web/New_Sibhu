import './App.css';
// import About from './pages/about/about';
import Apprenticeship from './pages/services/apprenticeship/apprenticeship';
import Permanent from './pages/services/permanent-staffing/permanent';
// import Staffing from './pages/services/staffing/staffing';

function App() {
  return (
    <div className="App">
      {/* <Apprenticeship/> */}
      {/* <Staffing/> */}
      <Permanent/>
    </div>
  );
}

export default App;
