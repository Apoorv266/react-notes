import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spining";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import spinner from "./Spining";

// export class News extends Component {
  const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)

  const caiptalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalArticles: 0,
  //   };
  // }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    // this.setState({ loading: true });
    setloading(true)
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json();

    setarticles(parsedData.articles)
    settotalArticles(parsedData.totalResults)
    setloading(false)

    // this.setState({
    //   articles: parsedData.articles,
    //   totalArticles: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100)
  }

  useEffect(() => {    //useEffect is used instead of componentDidMount() in function based component
    updateNews();
  }, )  // we have put an empty array which means no trigger is required to initiate this useEffect()
  
  // async componentDidMount() {
  //   this.updateNews();
  // }


  const fetchMoreData = async () => {
    // this.setState({
    //   page: this.state.page + 1,
    // });
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    // settotalArticles(parsedData.totalArticles)
    // this.setState({
      //we will refetch more articles but this time with page = +1 and adding fetched articles to the existing articles using concat...we used concat becuase all the articles are stored in an array
    //   articles: this.state.articles.concat(parsedData.articles),
    // });
  };

  // render() {
    return (
      <>
      
          <h2 className="text-center">
            Top {caiptalizeFirstletter(props.category)} Headlines
          </h2>
          {loading === false && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalArticles}
            loader={<Spinner/>}
          >
            <div className="w-100 p-3">
            <div className="row">
              {articles.map((element) => {
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
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
