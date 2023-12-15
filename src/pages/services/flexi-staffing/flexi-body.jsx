import React,{useEffect} from "react";
import "../../../style/services/permanent-body.css";
import "../../../style/services/flexi-body.css";
import "../../../style/services/staffing-component.css";
import "font-awesome/css/font-awesome.min.css";
function Flexibody(){
      useEffect(() => {
        // Select all elements with the class 'animate-2'
        const elements = document.querySelectorAll('.animate-2');
      
        // Loop through the elements and add the 'active-2' class
        elements.forEach((element) => {
          element.classList.add('active-2');
        });
      }, []);
    return(
        <section className="permanent-section">
            <h2>Flexi Staffing</h2>
            <div className="permanent-body">
                <div className="body-left animate-2 fade-left-2">
                    <div className="body-left-det">
                    When you look to hire candidate on your payroll on a permanent basis, we develop a customized recruiting plan according to the client’s requirement by understanding the position’s roles and responsibilities.

                    After getting a deep understanding of the job description from the client, our process includes
                    </div>
                    <ul className="body-left-list">
                        <li>Sourcing</li>
                        <li>Initial screening of resume / candidates</li>
                        <li>Arrange interview with the client</li>
                    </ul>
                    <div className="body-left-det">
                    We assign experienced recruitment consultant to each client to ensure that the entire assignment taken care and ensure that the candidates recommend by SP Staffing are with the correct fit for permanent basis within the client’s budget.

                    Some of key advantages of permanent staffing
                    </div>
                    <ul className="body-left-list">
                        <li>Reduces training period and training cost</li>
                        <li>Improves productivity and profitability</li>
                        <li>Right solution to fill key roles</li>
                        <li>Cost benefits and controls costs</li>
                        <li>Increase quality of workforce</li>
                    </ul>
                </div>
                <div className="body-right animate-2 fade-right-2 " id='flexi'></div>
            </div>
        </section>
    );
}
export default Flexibody;