import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spining";

export class News extends Component {
  // here we will create a variable name "articles" which will contain all news article and then use this variable inside the state in other words we will make news articles as part of state

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
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=1&pagesize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page - 1
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
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${this.state.page + 1
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


// today we learned 2 things:- how to pass props to class component and how to set loader 

// 1.We passed passed pagesize as props in app.js to news component....we can access pagesize prop in news component with the help of this.props.pagesize

// 2.Then we learned how we created loader-

//- first we created spining.js component and imported loader.gif in the component
//- then we imported spining.js component in news.js and named it "Spinner"
//- we have also created a state variable as loading false (line : 26)
// - Now only if when loading state variable is true , the spining.js component will be visible (line : 73)
// - now when will the state variable loading will be true ? It will be true in 2 conditions:-

//  1ST CONDITION-When API is getting fetched for the first time the state variable will be true (line :20)and when it will be loaded , state variable loading will become false(line : 26)

//2ND CONDITION-When API is again refetched when next and previous button is clicked the state variable loading will be true (line 35,55) when then fetching is complete , the state varible loading will become false (line 43,63)

//Also the news component can only be fetched when loading state component is false, when it is true no news will be populate and loader will be visible (76)