import React,{useEffect} from "react";
import "../../style/about/about-body.css";
// import { Outlet, Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
function Aboutbody() {
  const reveal = () => {
    const animate = document.querySelectorAll(".animate");

    for (let i = 0; i < animate.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = animate[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        animate[i].classList.add("active");
      }
      // else {
      //   animate[i].classList.remove("active");
      // }
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", reveal);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <section className="sec">
      <div className="content animate fade-left active">
        <h2>ABOUT US</h2>
        <div className='heading-det'>
            <h2>Something Dynamically</h2>
             <div className="img"></div>
        </div>
        <h3 >Text to be dynamically put</h3>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <h3 >Text to be dynamically put</h3>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <h3 >Text to be dynamically put</h3>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
      </div>
      <div className="content animate fade-left">
      <div className='heading-det'>
            <h2>Our Story</h2>
        </div>
        <h3 >Text to be dynamically put</h3>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <h3 >Text to be dynamically put</h3>
        <p >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
      </div>
      <div className="location ">
        <h2 >Our Locations</h2>
        <div className="location-details">
            <div className="name-1">Major cities</div>
            <div className="name-1">Across country</div>
        </div>
        <div className="location-details-image animate fade-left-fast">
            <div className="box" id="bm1">
              City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div className="box" id="bm2">
            City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div className="box" id="bm3">
            City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div className="box" id="bm4">
            City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div className="box" id="bm5">
            City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div className="box" id="bm6">
            City,State <br/>
              No. of centers<br/>
              Contact: ************
            </div>
            <div id="m1">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" id="c1"/>
            </div>
            <div id="m2">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
            <div id="m3">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
            <div id="m4">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
            <div id="m5">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
            <div id="m6">
              <div>City, State</div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
            </div>
        </div>
        <div className="location-details">
            <div className="name-1">100+ Centers</div>
            <div className="name-1">10+ in Big cities</div>
        </div>
      </div>
      
    </section>

  );
}

export default Aboutbody;
