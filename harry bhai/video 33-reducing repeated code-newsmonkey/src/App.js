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
  pageSize = 5;
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      
      <Switch>
        
          <Route exact path="/"><News key="general" pageSize={this.props.pageSize} country={"in"} category={"general"}/></Route>

          <Route exact path="/business"><News key="business" pageSize={this.props.pageSize} country={"in"} category={"business"}/></Route>

          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.props.pageSize} country={"in"} category={"entertainment"}/></Route>

          <Route exact path="/health"><News key="health" pageSize={this.props.pageSize} country={"in"} category={"health"}/></Route>

          <Route exact path="/science"><News key="science" pageSize={this.props.pageSize} country={"in"} category={"science"}/></Route>

          <Route exact path="/sports"><News key="sports" pageSize={this.props.pageSize} country={"in"} category={"sports"}/></Route>

          <Route exact path="/technology"><News key="technology" pageSize={this.props.pageSize} country={"in"} category={"technology"}/></Route>
        </Switch>
      </Router>
      </>
    )
  }
}



