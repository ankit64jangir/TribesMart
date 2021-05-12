import React from 'react';
import { Menu } from 'antd';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




function LeftSeller(props) {

  const seller = useSelector(state => state.seller);
  console.log(seller);
  const user = useSelector(state => state.user);
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
    {seller.sellerData ? <a href="/sellerpage" style={{fontWeight: "bolder"}}>Home</a> : <a href="/" style={{fontWeight: "bolder"}}>Home</a>}
      
    </Menu.Item>
    <Menu.Item key="mail1">
        <a href="/statespecial" style={{fontWeight: "bolder"}}>State Speciality</a>
      </Menu.Item>
  </Menu>
  )
}

export default LeftSeller