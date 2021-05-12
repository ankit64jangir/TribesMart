import React, { useEffect, useState } from "react";
import Axios from "axios";
import background1 from "./Tribes.jpg";
import background2 from "./Tribes2.jpg";
import background3 from "./Tribes3.jpg";

import start from "./002.jpg";
import basket from "./basket.jpg";
import carpet from "./carpet.jpg";
import donat from "./donat.jpg";
import folk from "./folk.jpg";

import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import RadioCategoryBox from './Sections/RadioCategoryBox';
import { States, price, Category } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import "./back.css";
import { Carousel, Card, Col, Row } from "antd";
// import LandingPage from "../LandingPage/LandingPage";

const { Meta } = Card;

function HomePage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  const [Filters, setFilters] = useState({
    States: [],
    price: [],
    Category: []
})

useEffect(() => {

    const variables = {
        skip: Skip,
        limit: Limit,
    }

    getProducts(variables)

}, [])

const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables)
        .then(response => {
            if (response.data.success) {
                if (variables.loadMore) {
                    setProducts([...Products, ...response.data.products])
                } else {
                    setProducts(response.data.products)
                }
                setPostSize(response.data.postSize)
            } 
        })
}

const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
        skip: skip,
        limit: Limit,
        loadMore: true,
        filters: Filters,
        searchTerm: SearchTerms
    }
    getProducts(variables)
    setSkip(skip)
}


const renderCards = Products.map((product, index) => {

    return <Col lg={6} md={8} xs={24}>
        <Card style={{borderRadius: "15px"}}
            hoverable={true}
            cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
        >
            <Meta
                title={product.title}
                description={`₹${product.price}`}
            />
        </Card>
    </Col>
})


const showFilteredResults = (filters) => {

    const variables = {
        skip: 0,
        limit: Limit,
        filters: filters

    }
    getProducts(variables)
    setSkip(0)

}

const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {

        if (data[key]._id === parseInt(value, 10)) {
            array = data[key].array;
        }
    }
    console.log('array', array)
    return array
}

const handleFilters = (filters, category) => {

    const newFilters = { ...Filters }

    newFilters[category] = filters

    if (category === "price") {
        let priceValues = handlePrice(filters)
        newFilters[category] = priceValues

    }

    console.log(newFilters)

    showFilteredResults(newFilters)
    setFilters(newFilters)
}

const updateSearchTerms = (newSearchTerm) => {

    const variables = {
        skip: 0,
        limit: Limit,
        filters: Filters,
        searchTerm: newSearchTerm
    }

    setSkip(0)
    setSearchTerms(newSearchTerm)

    getProducts(variables)
}

  // const renderCards = Products.map((product, index) => {
  //   return (
  //     <Col lg={6} md={8} xs={24}>
  //       <Card
  //         style={{ borderRadius: "15px" }}
  //         hoverable={true}
  //         cover={
  //           <a href={`/product/${product._id}`}>
  //             {" "}
  //             <ImageSlider images={product.images} />
  //           </a>
  //         }
  //       >
  //         <Meta title={product.title} description={`₹${product.price}`} />
  //       </Card>
  //     </Col>
  //   );
  // });

  return (
    <div>
      <div className="fullSize">
        <Carousel autoplay>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={background1}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={background2}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={background3}
              alt="productImage"
            />
          </div>
        </Carousel>
      </div>
      <br />

      <div className="fullSize">
        <Carousel autoplay>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={start}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={basket}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={carpet}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={donat}
              alt="productImage"
            />
          </div>
          <div>
            <img
              className="roundCorner"
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src={folk}
              alt="productImage"
            />
          </div>
        </Carousel>
      </div>

      <br />

      <div>
        <div className="site-card-border-less-wrapper-category">
          <Row gutter={24}>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://images-na.ssl-images-amazon.com/images/I/81dNxRYIUEL._SL1500_.jpg"
                  />
                }
              >
                <Meta
                  title="Metal Craft"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6b5LiOOA_aEylGlfDqDfvTXV6qQIOLPbJVw&usqp=CAU"
                  />
                }
              >
                <Meta
                  title="Tribal Textile"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://www.pankaj-boutique.com/15537-large_01resp/tribal-necklace-earrings-india.jpg"
                  />
                }
              >
                <Meta
                  title="Tribal Jewellery"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://images-na.ssl-images-amazon.com/images/I/814wFdDfanL._SL1500_.jpg"
                  />
                }
              >
                <Meta
                  title="Tribal Painting"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row gutter={24}>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6dV-Htqv57RObMGSFm83E-dvJAKXNpRbBw&usqp=CAU"
                  />
                }
              >
                <Meta
                  title="Cane & Bamboo"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.shopify.com/s/files/1/0691/6757/articles/terracotta_1600x.jpg?v=1571870316"
                  />
                }
              >
                <Meta
                  title="Terracotta & Stone Pottery"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://4.imimg.com/data4/OE/HK/MY-1511482/gift-novelties-5-250x250.jpg"
                  />
                }
              >
                <Meta
                  title="Gift & Novelties"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ width: 300, borderRadius: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="data:image/jpeg;base64,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"
                  />
                }
              >
                <Meta title="Other" />
              </Card>
            </Col>
          </Row>
          <br />

          <div >
            {/* {Products.length === 0 ? <div><h2>Hello</h2></div> :  */}

            <div style={{ width: "75%", margin: "3rem auto" }}>
              <div style={{ textAlign: "center" }}>
                {/* <h2>  Let's Travel Anywhere  <Icon type="rocket" />  </h2> */}
              </div>

              {/* Filter  */}

              <Row gutter={[16, 16]}>
                <Col lg={8} xs={24}>
                  <CheckBox
                    list={States}
                    handleFilters={(filters) =>
                      handleFilters(filters, "States")
                    }
                  />
                </Col>
                <Col lg={8} xs={24}>
                  <RadioBox
                    list={price}
                    handleFilters={(filters) => handleFilters(filters, "price")}
                  />
                </Col>
                <Col lg={8} xs={24}>
                  <RadioCategoryBox
                    list={Category}
                    handleFilters={(filters) =>
                      handleFilters(filters, "Category")
                    }
                  />
                </Col>
              </Row>

              {/* Search  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "1rem auto",
                }}
              >
                <SearchFeature refreshFunction={updateSearchTerms} />
              </div>

              {Products.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    height: "300px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>No Products</h2>
                </div>
              ) : (
                <div>
                  <Row gutter={[16, 16]}>{renderCards}</Row>
                </div>
              )}
              <br />
              <br />

              {PostSize >= Limit && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={onLoadMore}>Load More</button>
                </div>
              )}
            </div>
            {/* } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
