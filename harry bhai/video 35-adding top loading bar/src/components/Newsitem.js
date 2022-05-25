import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let { title, description, imageurl, newsUrl, author, date ,source } = this.props;
    return (
      <div className="my-5">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%",zIndex: "1"}}>
              {source}
            </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{title} </h3>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read full news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
