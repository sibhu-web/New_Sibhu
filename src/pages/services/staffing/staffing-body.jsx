import React,{useState} from "react";
// import { Outlet, Link } from "react-router-dom";
import "../../../style/services/staffing-body.css";
import "font-awesome/css/font-awesome.min.css";
import Staffingcomponent from "./staffing-components";

function Staffingbody() {
    const [componentsOpen, setcomponentsOpen] = useState(false);
    const [selectedComponentId, setSelectedComponentId] = useState(null);
        const opencomponent = (e) => {
          setcomponentsOpen(!componentsOpen);
          const targetElement2 = e.currentTarget;
          setSelectedComponentId(targetElement2.id);
          const mainpage=document.querySelector(`.staffing-container`);
          mainpage.style.display='none';
        };
  return (
    <>
    {
      componentsOpen && 
      <Staffingcomponent toggle={opencomponent} selectedComponentId={selectedComponentId}/>
    }
    <div className="staffing-container">
      <h2>Staffing Services</h2>
      <section className="staffing-services">
        <div className="staffing-card" id="box1" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-code" />
            </div>
            <div className="staffing-title">Automobile/Automative</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="box2" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-mobile" />
            </div>
            <div className="staffing-title">Information Technology</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="box3" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="staffing-title">Financial Services </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="box4" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-laptop" />
            </div>
            <div className="staffing-title">FMCG </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="box5" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-line-chart" />
            </div>
            <div className="staffing-title">Startup</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="box6" onClick={opencomponent}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-wordpress" />
            </div>
            <div className="staffing-title">Manufacturing</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Staffingbody;
