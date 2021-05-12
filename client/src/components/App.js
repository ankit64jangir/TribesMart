import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Authseller from "../hoc/authseller";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import SellerLandingPage from "./views/LandingPage/SellerLandingPage.js";
import HomePage from "./views/LandingPage/HomePage.js";
import StateSpecial from "./views/LandingPage/StateSpecial.js";
import GujaratInformation from "./views/LandingPage/GujaratInformation.js";
import Explore from "./views/LandingPage/Explore.js";
import TopSeller from "./views/LandingPage/TopSeller.js";
import JKInformation from "./views/LandingPage/JKInformation.js";
import SellerLogin from "./views/LoginPage/sellerLogin.js";
import BuyerLogin from "./views/LoginPage/buyerLogin.js";
import SellerRegister from "./views/RegisterPage/sellerRegister.js";
import BuyerRegister from "./views/RegisterPage/buyerRegister.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';


function App() {
  
  return (
    
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage)} />
          <Route exact path="/landingpage" component={Auth(LandingPage)} />
          <Route exact path="/sellerLogin" component={Authseller(SellerLogin)} />
          <Route exact path="/buyerLogin" component={Auth(BuyerLogin)} />
          <Route exact path="/sellerRegister" component={Authseller(SellerRegister)} />
          <Route exact path="/buyerRegister" component={Auth(BuyerRegister)} />
          <Route exact path="/product/upload" component={Authseller(UploadProductPage)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage)} />
          <Route exact path="/user/cart" component={Auth(CartPage)} />
          <Route exact path="/history" component={Auth(HistoryPage)} />
          <Route exact path="/history" component={Authseller(HistoryPage)} />
          <Route exact path="/sellerpage" component={Authseller(SellerLandingPage)} />
          <Route exact path="/statespecial" component={Auth(StateSpecial)} />
          <Route exact path="/GujaratInformation" component={Auth(GujaratInformation)} />
          <Route exact path="/JKInformation" component={Auth(JKInformation)} />
          <Route exact path="/explore" component={Auth(Explore)} />
          <Route exact path="/topseller" component={Auth(TopSeller)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
