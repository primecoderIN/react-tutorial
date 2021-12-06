import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //This is common practice
// pages
import Home from "./Home";
import About from "./About";
import People from "./People"; //These are seperate components which will becomes our navigation pages
import Error from "./Error";
import Person from "./Person";
//Exact can be used with other pages along with home
//We wrap navigation inside router and  navigation links inside route
//path is used to set url . url may or may not be same as page name.
//Star and switch wrapper in path is used to display default page if any page does not exist
//Navbar is set ourside switch and inside router Which will enable it to be displayed on every pages
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      {/* This navbar will be added to each pages by placing here */}
      <Navbar />
      <Switch>
        {/* Each route should be placed inside switch if we are showing error page */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/* Everytime we click on a person name full person detail will be displayed
        In person component we will grap that id and display the content *
        //id k jagah ham kuch bhi likhenge to bhi chalega it does not matter. But good to write id/}
        <Route path="/person/:id" children={<Person />}>
          <Person />
        </Route>
        {/* Error route should be placed at last */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
