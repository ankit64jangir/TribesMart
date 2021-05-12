import React, { Component } from 'react'
import { Typography, Button, Form, Input , Checkbox} from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const States = [
    { key: 1, value: "Jammu and Kashmir" },
    { key: 2, value: "Himachal Pradesh" },
    { key: 3, value: "Uttarakhand" },
    { key: 4, value: "Uttar Pradesh" },
    { key: 5, value: "Rajasthan" },
    { key: 6, value: "Gujarat" },
    { key: 7, value: "Maharashtra" },
    { key: 8, value: "Goa" },
    { key: 9, value: "Karnataka" },
    { key: 10, value: "Kerala" },
    { key: 11, value: "Other" }
]

const Category = [
    {
      key: 1,
      value: "Metal Craft",
    },
    {
      key: 2,
      value: "Tribal Textile",
    },
    {
      key: 3,
      value: "Tribal Jewellery",
    },
    {
      key: 4,
      value: "Tribal Painting",
    },
    {
      key: 5,
      value: "Cane & Bamboo",
    },
    {
      key: 6,
      value: "Terracotta & Stone Pottery",
    },
    {
      key: 7,
      value: "Gift & Novelties",
    },
    {
      key: 8,
      value: "Other",
    },
  ];

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        States: 1,
        Category: 1,
        images: [],
        price: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeStates = (event) => {
        this.setState({ States: event.currentTarget.value })
    }
    
    handleChangeCategory = (event) => {
        this.setState({ Category: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.States || !this.state.images
            || !this.state.price || !this.state.Category) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.seller.sellerData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            States: this.state.States,
            price: this.state.price,
            Category: this.state.Category
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/sellerpage')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Product</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Price($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangeStates}>
                    {States.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <select onChange={this.handleChangeCategory}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <Checkbox>NOTE: Before showing your product on TribesMart our review team will verify your product details. If your product fails to match our requirements then our support team will guide you.</Checkbox>
                <br />
                <br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
