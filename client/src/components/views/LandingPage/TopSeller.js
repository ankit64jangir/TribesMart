import React from "react";
import { Button, Card, Col, Row } from "antd";
import "./main.css"
import ScriptTag from 'react-script-tag';

const open = () => {
    window.open("https://form.jotform.me/202615316462449", "_blank")
}



function TopSeller() {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false} style={{ borderRadius: "10px" }}>
            <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    alt="productImage"
                  />
                  <br />
                  <br />
                  <h4>Tribal Name</h4>
                  <h5>Jaipur</h5>
                  <p>4.8 ⭐</p>
                  <Button type="primary" onClick={open}>Contact</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} style={{ borderRadius: "10px" }}>
            <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    alt="productImage"
                  />
                  <br />
                  <br />
                  <h4>Tribal Name</h4>
                  <h5>Gujarat</h5>
                  <p>4.7 ⭐</p>
                  <Button type="primary" onClick={open}>Contact</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} style={{ borderRadius: "10px" }}>
            <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    alt="productImage"
                  />
                  <br />
                  <br />
                  <h4>Tribal Name</h4>
                  <h5>Jaipur</h5>
                  <p>4.5 ⭐</p>
                  <Button type="primary" onClick={open}>Contact</Button>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <ScriptTag isHydrating={true} type="text/javascript" src="https://form.jotform.me/202615316462449" /> */}
      {/* <script type="text/javascript" src="https://form.jotform.com/jsform/202615316462449"></script> */}
    </div>
  );
}

export default TopSeller;
