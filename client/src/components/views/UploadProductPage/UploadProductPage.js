import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Checkbox } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

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
  { key: 11, value: "Other" },
];

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

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContinentValue, setContinentValue] = useState(1);
  const [CategoryValue, setCategoryValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onStatesSelectChange = (event) => {
    setContinentValue(event.currentTarget.value);
  };

  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !ContinentValue ||
      !Images ||
      !CategoryValue
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.seller.sellerData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      States: ContinentValue,
      Category: CategoryValue
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/sellerpage");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Product</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price(₹)</label>
        <Input onChange={onPriceChange} value={PriceValue} type="number" />
        <br />
        <br />
        <select onChange={onStatesSelectChange} value={ContinentValue}>
          {States.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <select onChange={onCategorySelectChange} value={CategoryValue}>
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Checkbox>NOTE: Before showing your product on TribesMart our review team will verify your product details. If your product fails to match our requirements then our support team will guide you.</Checkbox>
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
