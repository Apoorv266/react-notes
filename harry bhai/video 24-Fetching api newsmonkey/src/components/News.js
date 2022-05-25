import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem title="My title" description="My description" />
          </div>
          <div className="col-md-4">
            <Newsitem title="My title" description="My description" />
          </div>
          <div className="col-md-4">
            <Newsitem title="My title" description="My description" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;

// render() is a lifecycle method and it helps in compiling jsx to html and rendering html on screen
