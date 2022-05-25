import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height= {4}
            progress={this.state.progress}
          />
          <Switch>

            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.props.pageSize} country={"in"} category={"general"} apiKey={this.apiKey}/></Route>

            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.props.pageSize} country={"in"} category={"business"} apiKey={this.apiKey} /></Route>

            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.props.pageSize} country={"in"} category={"entertainment"} apiKey={this.apiKey} /></Route>

            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.props.pageSize} country={"in"} category={"health"} apiKey={this.apiKey} /></Route>

            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.props.pageSize} country={"in"} category={"science"} apiKey={this.apiKey}/></Route>

            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.props.pageSize} country={"in"} category={"sports"} apiKey={this.apiKey} /></Route>

            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.props.pageSize} country={"in"} category={"technology"} apiKey={this.apiKey}/></Route>
          </Switch>
        </Router>
      </>
    )
  }
}



// This tutorial is thoery based and no code change is made

// what is react hook ?

// features of class based components in function based components
// it allows you to use state and other react features without writing a class
// Hooks are the functions which "hook into" react state and lifecycle features from functional components


// commonly used react hooks are :-
// useState
// useEffect
// useContext
// useRef