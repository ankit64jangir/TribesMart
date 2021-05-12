import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import "./main.css"
import { Icon, Col, Card, Row, Carousel } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import RadioCategoryBox from './Sections/RadioCategoryBox';
import { States, price, Category } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import start from "./002.jpg";
import basket from "./basket.jpg";
import carpet from "./carpet.jpg";
import donat from "./donat.jpg";
import folk from "./folk.jpg";

const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

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


<div className="site-card-border-less-wrapper-landing">
        {/* {Products.length === 0 ? <div><h2>Hello</h2></div> :  */}




        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                {/* <h2>  Let's Travel Anywhere  <Icon type="rocket" />  </h2> */}
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                <Col lg={8} xs={24} >
                    <CheckBox
                        list={States}
                        handleFilters={filters => handleFilters(filters, "States")}
                    />
                </Col>
                <Col lg={8} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
                <Col lg={8} xs={24}>
                    <RadioCategoryBox
                        list={Category}
                        handleFilters={filters => handleFilters(filters, "Category")}
                    />
                </Col>
            </Row>


            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>


            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No Products</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }


        </div>
        {/* } */}
        </div>
</div>
    )
}

export default LandingPage
