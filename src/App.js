import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermAndCondition from "./components/TermAndCondition/TermAndCondition";
import Footer from "./components/Footer/Footer";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/TermAndCondition" component={TermAndCondition} />
        <Redirect path="/*" to={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
