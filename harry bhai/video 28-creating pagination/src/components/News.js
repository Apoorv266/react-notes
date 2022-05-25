import React, { Component } from "react";
import Newsitem from "./Newsitem";

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
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=1&pagesize=5";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults
    });
  }

  // componentDidMount() is a life meathod and will run after render () function

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${
      this.state.page - 1
    }&pagesize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(this.state.page);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 9)) {
      document.getElementById("nextbut").disabled();

    } else {
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306&page=${
        this.state.page + 1
      }&pagesize=5`;
      
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(this.state.page);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Top headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
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


// today we learned how we can create pagination
// we created two buttons one previous and one next
// we created a state variable : page which has initial value as 1
// now when next button is clicked we will increase the page stage by 1 and insert the updated the url of api
// if previous button is clicked then page state is substracted by 1
// we will disable previous button using disabled={this.state.page <= 1} inside the button when page becomes equal to 1 (line 86)

// How we determined number of pages ?

// we first find out that how many news will be displayed on one page..we will do this by using &pagesize=5 parameter is API url

// now we know there are total 10 news headlines 

// if 5 news are coming on 1 page
// so 10 news will come on 2 page (10/5)

// we have fetched total number of news in the API by using setting :-totalArticles: parsedData.totalResults as new state key:value pair....parsed data give the json format of API data andtotalResults give the total number of news in that parsedData

// now we have used if condition in next button...if current page number excedes page number required to view total news (10/5=2 pages) then disable the next button (line 45)
