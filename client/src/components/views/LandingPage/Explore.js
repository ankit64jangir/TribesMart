import React from "react";
import { Card, Col, Row, Carousel, Button } from "antd";
import "./main.css";

function Explore() {
  return (
    <div>
      <h3 style={{ marginLeft: "650px", color: "teal", marginTop: "10px" }}>
        Tribal's Craft and Cluture
      </h3>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <a href="#bandhani">
              <Card
                title="Bandhani"
                bordered={false}
                style={{ borderRadius: "10px" }}
              >
                <img
                  className="roundCorner"
                  style={{ width: "100%", maxHeight: "150px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmP3pCsc7uulgRsgNNQK5FoCPjZxZt-bwHvw&usqp=CAU"
                  alt="productImage"
                />
              </Card>
            </a>
          </Col>
          <Col span={8}>
            <Card
              title="Beadwork"
              bordered={false}
              style={{ borderRadius: "10px" }}
            >
              <img
                className="roundCorner"
                style={{ width: "100%", maxHeight: "150px" }}
                src="https://images.squarespace-cdn.com/content/v1/57a4b023e58c624564a629b5/1487311554919-G67N6OSQFNRVF7V7Y15H/ke17ZwdGBToddI8pDm48kAJsswp0EXV6qc0SOJ8DOsUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_E7dXkCi7l7eF32s1E_vQW45WD95yMX6bcbEP6L1pnbQgytvpF9JKWwbDEjqe30p/image-asset.jpeg"
                alt="productImage"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Zari"
              bordered={false}
              style={{ borderRadius: "10px" }}
            >
              <img
                className="roundCorner"
                style={{ width: "100%", maxHeight: "150px" }}
                src="https://cdn.shopify.com/s/files/1/1950/2653/files/ccdbe54203c588228eb899fe75ca8af8_large.jpg?v=1528095954"
                alt="productImage"
              />
            </Card>
          </Col>
        </Row>
        <br />

        <Row gutter={16}>
          <Col span={8}>
            <a href="#kashmir">
              <Card
                title="Kahsmir Carpet"
                bordered={false}
                style={{ borderRadius: "10px" }}
              >
                <img
                  className="roundCorner"
                  style={{ width: "100%", maxHeight: "150px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsOamIophJOwJ8XCen7y1Gj5n9mCHz0DCwMw&usqp=CAU"
                  alt="productImage"
                />
              </Card>
            </a>
          </Col>
          <Col span={8}>
            <Card
              title="Coconut shell handicraft"
              bordered={false}
              style={{ borderRadius: "10px" }}
            >
              <img
                className="roundCorner"
                style={{ width: "100%", maxHeight: "150px" }}
                src="https://previews.123rf.com/images/asawinklabma/asawinklabma1512/asawinklabma151200010/50266616-coconut-shell-carving-handicraft-of-indigenous-people-in-bali-indonesia-.jpg"
                alt="productImage"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Banana Fiber Handicrafts"
              bordered={false}
              style={{ borderRadius: "10px" }}
            >
              <img
                className="roundCorner"
                style={{ width: "100%", maxHeight: "150px" }}
                src="https://www.boontoon.com/blog/wp-content/uploads/2017/07/Banana-fibre-products-anegundi-karnataka-960-720.jpg"
                alt="productImage"
              />
            </Card>
          </Col>
        </Row>
      </div>

      <section id="bandhani">
        <h3 style={{ marginLeft: "650px", color: "teal", marginTop: "30px" }}>
          Bandhani Work
        </h3>
        <div className="site-card-border-less-wrapper">
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Bandhani Dress"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://i.ytimg.com/vi/KlJ6Eh_A4iU/maxresdefault.jpg"
                    alt="productImage"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Making of Bandhani"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <iframe width="100%" height="150px" src="https://www.youtube.com/embed/Woup2yPwO5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Bandhani Saree"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToopfhUM4ggFZ52O4aRnNJtY0AB5cfjpw7zA&usqp=CAU"
                    alt="productImage"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <h2>Bandhej or Bandhani or tie-dye products are best produced in Jamnagar and Kutch region of Gujarat. One can see glimpses of Gujarat culture in the dress materials made of tie-dye technique. The Bandhej garments are available in many patterns and each one of them has a different. See below for patterns details: Chokidal: Primary pattern of square, elephants and other animals Kambaliya: Pattern in the centre and different designs on the border.</h2>
          <Button type="primary" style={{ marginLeft: "650px" }}>Shop by Bandhani</Button>
        </div>
      </section>

      <section id="kashmir">
        <h3 style={{ marginLeft: "650px", color: "teal", marginTop: "30px" }}>
          Kahsmir Carpet And Shawls
        </h3>
        <div className="site-card-border-less-wrapper">
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Silk Carpet"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://thumbs.dreamstime.com/z/handmade-kashmir-silk-carpets-oriental-design-patterns-nature-motif-several-111653102.jpg"
                    alt="productImage"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Making of Kashmiri Carpet"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <iframe width="100%" height="150px" src="https://www.youtube.com/embed/ln6Ln5lqN7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Hand Knotted Carpet"
                  bordered={false}
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    className="roundCorner"
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://miro.medium.com/max/866/1*_Sk8dpr9gelOyfTfk1JQqA.jpeg"
                    alt="productImage"
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <h2>The Kashmiri carpets are famous not only in India but across the globe. The Kashmiri carpet is known for its speciality of being handmade and similarly it is knotted and not tufted. The idea of carpets is nearly 1500 years old and it is not exactly known where and by whom the first carpet was made. However in India carpet weaving was first introduced in Kashmir in late 15th Century by King Badshah who brought artisans from Persia to train the people in Kashmir to spin and weave carpets. The Kashmiri carpets can be considered as a life time investment for it is hand-made. It is always prized quite high for the making of the carpet is quite laborious and time involving. Also the raw materials used in the production are very expensive like wool and silk. A handmade Kashmir carpet ranges from anywhere between Rs. 500 to Rs. 1, 00,000 depending upon the workmanship and the material used. However nowadays the prices are curbed for the fact that the artisans these days use mercerized cotton in the making of the carpet.</h2>
          <Button type="primary" style={{ marginLeft: "650px" }}>Shop by kashmiri carpet</Button>
        </div>
      </section>



    </div>
  );
}

export default Explore;
