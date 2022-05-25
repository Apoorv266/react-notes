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



// In this tutorial we learned how we can hide the api key
// To to this we created a file called .env.local which is a file that is used add local enviroment variables at one place...this file is included in .gitignore which means it will not be uploaded to git
// Now we added are api key in the .env.local file with name "REACT_APP_NEWS_API"
// NOW we fetched that api key from .env.local in app.js using apiKey = process.env.REACT_APP_NEWS_API (line : 15)
// Now we passed "apiKey" as props to news.js using apiKey={this.apiKey}
// now we will use "apikey" prop in news.js in API key URL using ${this.props.apiKey}