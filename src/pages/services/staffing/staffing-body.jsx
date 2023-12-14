import React,{useState,useEffect} from "react";
// import { Outlet, Link } from "react-router-dom";
import "../../../style/services/staffing-body.css";
import "font-awesome/css/font-awesome.min.css";
import Staffingcomponent from "./staffing-components";

function Staffingbody() {
    const [componentsOpen, setcomponentsOpen] = useState(false);
    const [selectedComponentId, setSelectedComponentId] = useState(null);
    let variable=0;
        const changeposition = (event) => {
        const ex=document.querySelector('.staffing-services');
        const ex2=document.querySelector('.staffing-services-details');
        variable++;
          const targetElement = event.currentTarget;
          console.log(`Clicked element with id: ${targetElement.id}\nclicked=${variable}`);
          targetElement.classList.add("active");
          // Do something with the id, like updating state or passing it to another component
        };
        const opencomponent = (e) => {
          setcomponentsOpen(!componentsOpen);
          if(!componentsOpen){
            const main=document.querySelector('.staffing-container');
            main.style.display='none';
          }
          const targetElement2=e.currentTarget;
          setSelectedComponentId(targetElement2.id);
        };
        useEffect(() => {
          console.log(`id = ${selectedComponentId}\nTgv=${selectedComponentId}`);
        }, [selectedComponentId]);
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
            <div className="staffing-title">Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="sc2" onClick={changeposition}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-mobile" />
            </div>
            <div className="staffing-title">App Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="sc3" onClick={changeposition}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="staffing-title">Web Design </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="sc4" onClick={changeposition}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-laptop" />
            </div>
            <div className="staffing-title">Responsive Design </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="sc5" onClick={changeposition}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-line-chart" />
            </div>
            <div className="staffing-title">Advertising </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="staffing-card" id="sc6" onClick={changeposition}>
          <div className="staffing-content">
            <div className="staffing-icon">
              <i className="fa fa-wordpress" />
            </div>
            <div className="staffing-title">Wordpress</div>
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
