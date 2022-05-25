import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spining";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import spinner from "./Spining";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  caiptalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  // componentDidMount() is a life meathod and will run after render () function

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      //we will refetch more articles but this time with page = +1 and adding fetched articles to the existing articles using concat...we used concat becuase all the articles are stored in an array
      articles: this.state.articles.concat(parsedData.articles),
    });
  };

  render() {
    return (
      <>
      
          <h2 className="text-center">
            Top {this.caiptalizeFirstletter(this.props.category)} Headlines
          </h2>
          {this.state.loading === true && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Spinner/>}
          >
            <div className="w-100 p-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}

              {/* each iterated element should get a unique key while using map function */}
            </div>
            </div>
          </InfiniteScroll>
      
      </>
    );
  }
}

export default News;
