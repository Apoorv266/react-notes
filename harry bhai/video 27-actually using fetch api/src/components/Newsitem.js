import React, { Component } from "react";

export class Newsitem extends Component {
  
  render() {
    let { title, description, imageurl, newsUrl} = this.props;
    return (
      <div className="my-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read full news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
