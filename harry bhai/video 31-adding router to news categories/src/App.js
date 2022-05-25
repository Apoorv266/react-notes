import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      
      <Switch>
          <Route exact path="/general"><News key="general" pageSize={5} country={"in"} category={"general"}/></Route>

          <Route exact path="/business"><News key="business" pageSize={5} country={"in"} category={"business"}/></Route>

          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country={"in"} category={"entertainment"}/></Route>

          <Route exact path="/health"><News key="health" pageSize={5} country={"in"} category={"health"}/></Route>

          <Route exact path="/science"><News key="science" pageSize={5} country={"in"} category={"science"}/></Route>

          <Route exact path="/sports"><News key="sports" pageSize={5} country={"in"} category={"sports"}/></Route>

          <Route exact path="/technology"><News key="technology" pageSize={5} country={"in"} category={"technology"}/></Route>
        </Switch>
      </Router>
      </>
    )
  }
}



// in this tutorial we learn that how we can implement react router for news categories

// There are the steps to follow :-

// 1.First install react router using - npm install react-router-dom@5.2.0
// react-router-dom has 3 parts, router, switch , link
// 2.Then import the router, Switch from react-router-dom 
// 3.Then within the <router></router> tags mention the switches 
// 4.In switches we mention the routes that we want to be used in router.Routes composed of components that we want to load as router.
// it is also important to use keyword "exact" in routes to exactly match the path
// 5. Now import the "link" from react-router-dom in the file in which we have to mention the links for the routing
// The "path" of routes is linked with "to" of UI elements 
// 6. Now replace <a></a> with <Link></Link> and "href" with "to"...href causes the page to reload
// 7.Always make sure that URL of routes and URL of UI elements should be same that is "path" and "to" should be same
// 8.Now we will pass a unique key to each route so that it loads seperately with new props
