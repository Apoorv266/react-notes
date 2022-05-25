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
                    newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}
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


// In this tutorial we will learn 3 things:-

// 1.How to add date to the news
// 2.How to add author to the news
// 3.How to add news source to the news in form of batch on top


// 1.How to add date to the news:-

// We first passed the props to newsitems with name "date" with parameter element.publishedAt

// Now we will use this prop in news.js and we will access the date prop using this.props.date or we can collectively put variables on top and store the value in "this.prop" (newsitems.js line 6)

// we have used {new Date(date).toDateString()} to obtain date from the news with the help of toDateString()

// 2.How to add author to the news

// We have passed the prop to newsitems with name "author" with parameter element.author
// using ternary operator we have specified if author is null then use the keyword "unknown" otherwise use prop this.props.author (newsitems.js line 17)


// 3.How to add news source to the news in form of batch on top

// We copied batch component from bootstrap and placed it in newsite.js at line 10.
// We passed the source prop to it which has the value of "element.source.name"
// We gave a style of "left" to left align the badge and z-index : 1 