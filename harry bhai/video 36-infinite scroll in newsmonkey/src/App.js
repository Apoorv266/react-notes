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

            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.props.pageSize} country={"in"} category={"general"} /></Route>

            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.props.pageSize} country={"in"} category={"business"} /></Route>

            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.props.pageSize} country={"in"} category={"entertainment"} /></Route>

            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.props.pageSize} country={"in"} category={"health"} /></Route>

            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.props.pageSize} country={"in"} category={"science"} /></Route>

            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.props.pageSize} country={"in"} category={"sports"} /></Route>

            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.props.pageSize} country={"in"} category={"technology"} /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}



//In this tutorial we did learned how to add progressive bar:-

// 1st is to install the package of infinite scroll

// Once the package is installed we imported the module and its component{line :10,30}

// Then we created a state variable progress and sets its inital value to be 0

// now we created a function called "setProgress" and passed it as prop to news.js using setProgress={this.setProgress} 

// The function "setProgress" will update the state of the stable variable progress depending upon the parameter 

// Now initially the value of progress is 0

// When the page is loaded value of state variable progress is uptated to 10 using "setProgress" function (line 36 in news.js)

// When the api is fetched value of state variable progress is uptated to 50 using "setProgress" function (line 40 in news.js)

// When the api is finally fetched and parsed data is available then value of state variable progress is uptated to 100 using "setProgress" function (line  47 news.js)


//extra knowledge: component main function is to load something with its current state
// Absolute positioned elements are removed from the normal flow, and can overlap elements