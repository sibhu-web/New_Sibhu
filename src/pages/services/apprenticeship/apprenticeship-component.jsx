import React,{useState,useEffect} from "react";
// import { Outlet, Link } from "react-router-dom";
import "../../../style/services/staffing-component.css";
import "font-awesome/css/font-awesome.min.css";

function Apprenticeshipcomponent({selectedComponentId}) {
  const [activeElement, setActiveElement] = useState(null);
  useEffect(() => {
    // Move the logic inside the useEffect hook
    const ex = document.querySelector(`.animate-2`);
  
    // Check if the element exists before manipulating it
    if (ex) {
      ex.classList.add("active-2");
    }
  }, []);

  useEffect(() => {
    // Check if selectedComponentId is not null
    if (selectedComponentId) {
      const startId = document.querySelector(`#${selectedComponentId}-det`);
      
      // Check if startId is not null before adding the 'active' class
      if (startId) {
        startId.classList.add("active");
        setActiveElement(startId);
      }
    }
  }, [selectedComponentId]);

  const showdetails = (event) => {
    const targetElement = event.currentTarget;
    const newtarget = document.querySelector(`#${targetElement.id}-det`);

    // Check if there's an activeElement and remove its "active" class
    if (activeElement) {
      activeElement.classList.remove("active");
    }

    // Add "active" class to the new element
    newtarget.classList.add("active");

    // Update the activeElement state with the new element
    setActiveElement(newtarget);

    console.log(`Clicked element with id: ${targetElement.id}\nThe id as proop is ${selectedComponentId}`);
  };
  return (
    <div className="service-component-section ">
      <h1 className="title">Apprenticeship Services</h1>
      <div className="border" />
      <div className="service-component-body animate-2 fade-left-2">
        <div className="service-component-container">
          <div className="service-component-box" id="box1" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-code" />
            </div>
            <div className="service-component-title">
              Web Development
            </div>
          </div>
          <div className="service-component-box" id="box2" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-mobile" />
            </div>
            <div className="service-component-title">
              App Development
            </div>
          </div>
          <div className="service-component-box" id="box3" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="service-component-title">
                Web Design
                </div>
          </div>
          <div className="service-component-box" id="box4" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-laptop" />
            </div>
            <div className="service-component-title">
                Responsive Design
                </div>
          </div>
          <div className="service-component-box" id="box5" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-line-chart" />
            </div>
            <div className="service-component-title">
                Advertising
                </div>
          </div>
          <div className="service-component-box" id="box6" onClick={showdetails}>
            <div className="service-component-icon">
              <i className="fa fa-wordpress" />
            </div>
            <div className="service-component-title">
                Wordpress
                </div>
          </div>
        </div>
        <div className="service-component-details" id="box1-det">
          <h2>Web Development</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
        <div className="service-component-details" id="box2-det">
          <h2>App Development</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
        <div className="service-component-details " id="box3-det">
          <h2>Web Design</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
        <div className="service-component-details " id="box4-det">
          <h2>Responsive Design</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
        <div className="service-component-details " id="box5-det">
          <h2>Advertising</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
        <div className="service-component-details" id="box6-det">
          <h2>Wordpress</h2>
          <div className="ser-comp-det-img" id="automobile"></div>
          <div className="ser-comp-det-data">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente
            in, accusamus fuga, nobis impedit incidunt dolore, esse nam
            reiciendis delectus! Saepe aliquam porro praesentium voluptatem,
            itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse
            magnam repudiandae pariatur dolores! Enim repudiandae error
            consectetur assumenda officia quo sint ab quia eveniet atque
            blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum
            autem reprehenderit tempore? Facilis dolores cupiditate alias odit
            corporis, suscipit libero perferendis dolor, nulla, officiis iure
            molestias reiciendis aspernatur consectetur placeat esse omnis
            assumenda necessitatibus quos ratione? Cumque nisi corporis laborum
            eius.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apprenticeshipcomponent;
