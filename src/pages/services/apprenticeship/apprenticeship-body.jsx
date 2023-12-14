import React from "react";
// import { Outlet, Link } from "react-router-dom";
import "../../../style/services/apprenticeship-body.css";
import "font-awesome/css/font-awesome.min.css";

function Apprenticeshipbody() {
  return (
    <div className="container">
      <h2>Apprenticeship Services</h2>
      <section className="services">
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-code" />
            </div>
            <div className="title">Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-mobile" />
            </div>
            <div className="title">App Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="title">Web Design </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-laptop" />
            </div>
            <div className="title">Responsive Design </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-line-chart" />
            </div>
            <div className="title">Advertising </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="icon">
              <i className="fa fa-wordpress" />
            </div>
            <div className="title">Wordpress</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              reprehenderit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apprenticeshipbody;
