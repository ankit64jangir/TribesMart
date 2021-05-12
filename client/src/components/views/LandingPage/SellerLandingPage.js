import React from "react";
import background from "./4.jpg";
import "./back.css";
import { Row, Col } from "antd";

function SellerLandingPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "90vh",
          backgroundSize: "cover",
          backgroundSize: "100% 100%",
          backgroundAttachment: "scroll",
          backgroundRepeat: "norepeat",
          backgroundPosition: "center center",
        }}
      >
        
        <Row>
          <Col span={12}>
          <div style={{marginTop: "240px", marginLeft: "75px"}}>
            <h1 className="color">Made With Love 💛</h1>
            <h4>
              A tribe is a group of people connected to one another, connected
              to a leader, and connected to an idea.
            </h4>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SellerLandingPage;
