import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}></Header>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route exact={true} path="/shop" component={Shoppage}></Route>
        <Route
          exact={true}
          path="/signin"
          component={SignInAndSignUpPage}
        ></Route>
      </div>
    );
  }
}

export default App;
