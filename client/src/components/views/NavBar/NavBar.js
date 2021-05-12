import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import LeftSeller from './Sections/LeftSeller';
import RightMenu from './Sections/RightMenu';
import RightSeller from './Sections/RightSeller';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import { useSelector } from "react-redux";



function NavBar() {

  const seller = useSelector(state => state.seller);
  const user = useSelector(state => state.user);
  // console.log(seller);
  // console.log(user);

  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
      {/* {user.userData ? <a href="/landingpage">Logo</a> : <a href="/sellerpage">Logo</a>} */}
      <a href="/">Tribes<sup>Mart</sup></a>
      
        
      </div>
      <div className="menu__container">
        <div className="menu_left">
        {user.userData ? <LeftMenu mode="horizontal" /> : <LeftSeller mode="horizontal" />}
          
        </div>
        <div className="menu_rigth">
        {user.userData ? <RightMenu mode="horizontal" /> : <RightSeller mode="horizontal" />}
          
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar