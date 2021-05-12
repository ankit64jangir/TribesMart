/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge , Button} from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { SELLER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)
  const seller = useSelector(state => state.seller)
  // console.log(user);
  // console.log(seller);

  const logoutHandler = () => {
      axios.get(`${USER_SERVER}/logout`).then(response => {
        if (response.status === 200) {
          props.history.push("/");
        } else {
          alert('Log Out Failed')
        }
      });
    
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div style={{ margin: "10px"}}>
      <Menu mode={props.mode}>
       
        <Button style={{marginRight: "10px", fontWeight: "bolder"}} href="/sellerLogin" type="primary">Seller</Button>
          {/* <a href="/sellerLogin">Seller</a> */}
       
        <Button href="/buyerLogin" type="primary" style={{fontWeight: "bolder"}}>Buyer</Button>
          {/* <a href="/buyerLogin">Buyer</a> */}
        
        
      </Menu>
      </div>
    )
  } else {
    return (
      <Menu mode={props.mode}>


        <Menu.Item key="history">
          <a href="/history" style={{fontWeight: "bolder"}}>History</a>
        </Menu.Item>

        {/* <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item> */}

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>


        <Menu.Item key="logout">
        <Button style={{marginBottom: "15px", fontWeight: "bolder"}} onClick={logoutHandler} type="primary">Logout</Button>
          {/* <a onClick={logoutHandler}>Logout</a> */}
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

