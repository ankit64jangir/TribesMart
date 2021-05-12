import React from "react";
import { Menu, Dropdown } from "antd";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
  <Menu>
    <SubMenu title="Metal Craft">
      <Menu.Item>Dokra metal craft</Menu.Item>
      <Menu.Item>Jaali metal craft</Menu.Item>
      <Menu.Item>Jhitku Mitku metal craft</Menu.Item>
      <Menu.Item>Madia Madin metal craft</Menu.Item>
      <Menu.Item>Todi metalcraft</Menu.Item>
    </SubMenu>
    <SubMenu title="Tribal Textile">
      <Menu.Item>hand block printing</Menu.Item>
      <Menu.Item>Chanderi</Menu.Item>
      <Menu.Item>Bandhani</Menu.Item>
      <Menu.Item>Tie-Dye</Menu.Item>
      <Menu.Item>Batike</Menu.Item>
    </SubMenu>
    <SubMenu title="Tribal Jewellery">
      <Menu.Item>Banjara</Menu.Item>
      <Menu.Item>Bastar</Menu.Item>
      <Menu.Item>Khasi, jaintia and Garo</Menu.Item>
      <Menu.Item>Bhutia</Menu.Item>
    </SubMenu>
    <SubMenu title="Tribal Painting">
      <Menu.Item>Tanjore Art</Menu.Item>
      <Menu.Item>Madhubani Painting</Menu.Item>
      <Menu.Item>Warli Folk Painting</Menu.Item>
      <Menu.Item>Pattachitra Painting</Menu.Item>
      <Menu.Item>Rajasthani Miniature Painting</Menu.Item>
      <Menu.Item>Kalamezhuthu</Menu.Item>
    </SubMenu>
    <SubMenu title="Cane & Bamboo">
      <Menu.Item>Kalamezhuthu</Menu.Item>
      <Menu.Item>Bottle</Menu.Item>
    </SubMenu>
    <SubMenu title="Terracotta & Stone Pottery">
      <Menu.Item>CAPRIVI STRIP BRACELET</Menu.Item>
      <Menu.Item>Pot</Menu.Item>
    </SubMenu>
    <SubMenu title="Gift & Novelties">
      <Menu.Item>KAVANGO RIVER</Menu.Item>
      <Menu.Item>HIMBA RED</Menu.Item>
      <Menu.Item>CAPRIVI STRIP BRACELET SET</Menu.Item>
      <Menu.Item>Patola</Menu.Item>
    </SubMenu>
    <SubMenu title="Other">
      <Menu.Item>Saura </Menu.Item>
      <Menu.Item>Bhil</Menu.Item>
      <Menu.Item>More...</Menu.Item>
    </SubMenu>
  </Menu>
);

function LeftMenu(props) {
  const seller = useSelector((state) => state.seller);
  const user = useSelector((state) => state.user);
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        {user.userData.isAuth === true ? (
          <a href="/landingpage" style={{fontWeight: "bolder"}}>Home</a>
        ) : (
          <a href="/" style={{fontWeight: "bolder"}}>Home</a>
        )}
      </Menu.Item>
      <Menu.Item key="mail1">
        <a href="/statespecial" style={{fontWeight: "bolder"}}>State Speciality</a>
      </Menu.Item>
     
      <Menu.Item key="mail3">
        <Dropdown overlay={menu}>
          <a style={{fontWeight: "bolder"}} className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Categories
          </a>
        </Dropdown>
      </Menu.Item>
      <Menu.Item key="mail2">
        <a href="/explore" style={{fontWeight: "bolder"}}>Explore</a>
      </Menu.Item>
      {user.userData.isAuth === true ? <Menu.Item key="mail4">
        <a href="/topseller" style={{fontWeight: "bolder"}}>Seller</a>
      </Menu.Item> : null}
    </Menu>
  );
}

export default LeftMenu;
