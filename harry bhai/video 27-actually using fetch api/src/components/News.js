import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  // here we will create a variable name "articles" which will contain all news article and then use this variable inside the state in other words we will make news articles as part of state
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2fa1e8b298304bf0a57f485aad176306"
let data = await fetch(url);
let parsedData = await data.json()
console.log(parsedData)
this.setState({articles : parsedData.articles})
  }

  

  render() {
    return (
      <>
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          
          {this.state.articles.map ((element) => {
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description: ""} imageurl={element.urlToImage} newsUrl= {element.url}/>
          </div>
          })}
          
          {/* each iterated element should get a unique key while using map function */}

        </div>
      </div>
      </>
    );
  }
}

export default News;

// render() is a lifecycle method and it helps in compiling jsx to html and rendering html on screen

// componentDidMount() is a life meathod and will run after render () function

// we will fetch the API inside componentDidMount() function

// the parsedData stores the json format of the data of API

// We have created an empty state variable called articles which is an empty array

//now once we fetch the API we will set the state of articles as parsedData.articles using this.setState({articles : parsedData.articles}) (line : 20)

// we can access the updated state of state variable articles by "this.state.articles"

// Also some of the titles and description are null in the api so using ternary operation we have set if element.title/element.description is present then pass it otherwise if its null then leave it empty as empty string (line 34)

// We set state in class component inside constructer function