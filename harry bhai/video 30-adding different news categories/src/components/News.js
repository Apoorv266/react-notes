import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spining";
import PropTypes from 'prop-types';

export class News extends Component {

static defaultProps = {
  country:"in",
  pageSize : 5,
  category: "general"
}

static propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category: PropTypes.string
}

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading : false
    });
  }

  // componentDidMount() is a life meathod and will run after render () function

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page - 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.page);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNext = async () => {
    // this.state.totalArticles / 5 gives total number of pages required to display all the news that is 10 if 5 news are displyed on 1 page
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)) {
      document.getElementById("nextbut").disabled();

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page + 1
        }&pagesize=${this.props.pageSize}`;
        this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(this.state.page);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">Top headlines</h2>
          {this.state.loading === true && <Spinner/>}
        
          <div className="row">
            {this.state.loading === false && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
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


// in this tutorial we learned how to set defaultProps and proptypes for props in class component - we have to use "static" keyword before declaring defaultProps and proptypes...defaultProps and proptypes are declared where those props are used

// defaultProps is used to set default values to the props 

// proptypes is used to set the data type to the props

// We also created all news categories on the top navbar 

// Also we declared 2 more props- "country" "category" in order to display the news according to country and category and implemented these props inside the API URL usingthis.props.country and this.props.category