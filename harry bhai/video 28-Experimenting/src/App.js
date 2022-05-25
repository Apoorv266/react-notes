import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      Col: "white",
      TextCol: "black",
      Country: "ae",
      Link: "",
    };
  }

  ConArab = () => {
    this.setState({ Country: "in" });
    this.setState({ Link: "/" });
  };

  ConRus = () => {
    this.setState({ Country: "ru" });
    this.setState({ Link: "/" });
  };

  ConChin = () => {
    this.setState({ Country: "hk" });
    this.setState({ Link: "/" });
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  addContactHandler = () => {
    if (this.state.Col === "white") {
      this.setState({ Col: "#042743" });
      this.setState({ TextCol: "white" });
    } else if (this.state.Col === "#042743") {
      this.setState({ Col: "white" });
      this.setState({ TextCol: "black" });
    }
  };

  render() {
    return (
      <>
        <Router>
          <Navbar
            addContactHandler={this.addContactHandler}
            ConArab={this.ConArab}
            ConRus={this.ConRus}
            ConChin={this.ConChin}
            Currlink={this.state.Link}
            Country={this.state.country}
          />
          <LoadingBar
            color="#f11946"
            height={4}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"general"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"business"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"entertainment"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"health"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"science"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"sports"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>

            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.props.pageSize}
                country={this.state.Country}
                category={"technology"}
                apiKey={this.apiKey}
                Col={this.state.Col}
                TextCol={this.state.TextCol}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
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
