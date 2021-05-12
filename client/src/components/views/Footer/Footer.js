import React from 'react'
import {Icon} from 'antd';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


function Footer() {
    return (
        <div>
            <MDBFooter color="#f5b22c" className="peach-gradient font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            
            <div>
            <MDBRow>
              <MDBCol md="4">
                <h2 className="title">Tibes<sup>Mart</sup></h2>
                <p>
                “A tribe is a group of people connected to one another, connected to a leader, and connected to an idea. For millions of years, human beings have been part of one tribe or another. A group needs only two things to be a tribe: a shared interest and a way to communicate.”
                </p>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title">Get to Know Us</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Careers</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Press Releases</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Support</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title">Information</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Terms & Conditions</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Disclaimer</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Donation</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            </div>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href=""> TribesMart.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
        
      );
}

export default Footer
