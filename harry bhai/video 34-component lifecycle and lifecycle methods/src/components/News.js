import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spining";
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  caiptalizeFirstletter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  // componentDidMount() is a life meathod and will run after render () function

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews()
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">Top {this.caiptalizeFirstletter(this.props.category)} Headlines</h2>
          {this.state.loading === true && <Spinner />}

          <div className="row">
            {this.state.loading === false && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
              );
            })}

            {/* each iterated element should get a unique key while using map function */}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              rel="noreferrer"
              type="button"
              className="btn btn-success"
              onClick={this.handlePrev}
            >
              {" "}
              Previous
            </button>

            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)}
              rel="noreferrer"
              type="button"
              id="nextbut"
              className="btn btn-success"
              onClick={this.handleNext}
            >
              Next{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;


// this tutorial was based on theory no code update is done