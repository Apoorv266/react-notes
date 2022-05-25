import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-5">
        <div className="card">

          <div style={{ display: "flex", 
          justifyContent: "flex-end",
           position:'absolute',
           right:0 }}>

            <span className="badge rounded-pill bg-danger" >
              {source}
            </span>

          </div>

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
