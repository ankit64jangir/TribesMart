import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";
import { useSelector } from "react-redux";
import { DownloadOutlined } from '@ant-design/icons';

function ProductInfo(props) {
  const user = useSelector((state) => state.user);
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    if (user.userData.isAuth === true) {
      props.addToCart(props.detail._id);
    } else {
      alert("Please Login to Buy");
    }
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
        <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
        <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {Product.description}
        </Descriptions.Item>
      </Descriptions>
      {/* <br /> */}
      
      {/* <h2><Button type="primary" shape="round">Call</Button> <Button type="primary" shape="round">Email</Button></h2> */}

      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
