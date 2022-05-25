import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  // here we will create a variable name "articles" which will contain all news article and then use this variable inside the state in other words we will make news articles as part of state
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hargeisa fire: Inferno devastates market in Somaliland's capital",
      "description": "Hundreds of businesses are destroyed in the main market of Hargeisa in an overnight blaze.",
      "url": "http://www.bbc.co.uk/news/world-africa-60967458",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/115A6/production/_123987017_bbacea06-683b-419e-b188-8e5edeb9326d.jpg",
      "publishedAt": "2022-04-02T13:52:21.9843104Z",
      "content": "Image caption, The flames took all night to extinguish\r\nResidents of the capital of Somaliland, Hargeisa, have woken to scenes of devastation after fire tore through the main market overnight. \r\nThe … [+1778 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Sri Lanka imposes state of emergency amid protests",
      "description": "Protestors are angry because of food, fuel and power shortages across the nation.",
      "url": "http://www.bbc.co.uk/news/world-asia-60962185",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1313A/production/_123983187_gettyimages-1239665350.jpg",
      "publishedAt": "2022-04-02T11:22:21.1100184Z",
      "content": "Image source, NurPhoto/Getty Images\r\nImage caption, Burnt-out vehicles outside Sri Lankan President Gotabaya Rajapaksa's private residence in Colombo on Friday\r\nA nationwide state of emergency has be… [+3518 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Yemen warring parties agree two-month truce - UN",
      "description": "It is the first nationwide truce since 2016, in a war said to have killed nearly 400,000 people.",
      "url": "http://www.bbc.co.uk/news/world-middle-east-60962188",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11E7A/production/_123983337_gettyimages-1239614758-1.jpg",
      "publishedAt": "2022-04-02T03:07:22.7657979Z",
      "content": "Image source, AFP/Getty Images\r\nImage caption, Yemen is facing one of the world's worst humanitarian crises\r\nA two-month truce has been agreed by warring parties in Yemen, the UN says.\r\nIt is the fir… [+1751 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "The heavy losses of an elite Russian regiment in Ukraine",
      "description": "The 331st Guards Parachute Regiment based in Kostroma, Russia, has lost many soldiers in Ukraine.",
      "url": "http://www.bbc.co.uk/news/world-europe-60946340",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/828A/production/_123981433_leonidpanteleev.jpg",
      "publishedAt": "2022-04-02T02:22:14.5779973Z",
      "content": "By Mark UrbanDiplomatic and defence editor, Newsnight\r\nImage caption, Some of the 39 Russian soldiers from the 331st regiment who are known to have died\r\nIn any war, there are units that distinguish … [+9118 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC Sport",
      "title": "Ten things to look out for after World Cup draw",
      "description": "The World Cup draw for Qatar 2022 has been done - so what are the highlights?",
      "url": "http://www.bbc.co.uk/sport/football/60962193",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1483C/production/_123982048_-ebb88b46-59f7-4144-8bce-8166eebe9233.png",
      "publishedAt": "2022-04-02T01:22:19.7497737Z",
      "content": "Gareth Southgate assesses England's World Cup group\r\nThe draw for the Fifa World Cup Qatar 2022 is done and it has thrown out some intriguing fixtures.\r\nWhile the fate of eight teams battling for thr… [+8558 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "One mother's mission to ban 'vulgar' books",
      "description": "Challenges to books about sexual and racial identity have been common in US schools in the past. But the politicisation around them is new.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-60947937",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15912/production/_123983388_p0byzld7.jpg",
      "publishedAt": "2022-04-02T01:22:16.0319488Z",
      "content": "In the last year, book challenges have flooded local school boards and statehouses across the country at a pace not seen in decades. The BBC went to Katy, Texas, where the town's school district has … [+210 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Will Smith resigns from Oscars Academy over slap",
      "description": "The actor, who slapped comic Chris Rock, called his own actions \"shocking, painful, and inexcusable\".",
      "url": "http://www.bbc.co.uk/news/world-us-canada-60963054",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B17E/production/_123983454_willsmithslap.jpg",
      "publishedAt": "2022-04-01T23:37:21.515331Z",
      "content": "Media caption, Best actor winner Will Smith took offence at a joke by presenter Chris Rock\r\nUS actor Will Smith has resigned from the Oscars Academy after slapping comedian Chris Rock on stage during… [+1638 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Gretchen Whitmer: US jury deciding fate of 'kidnap plotters'",
      "description": "Four men are on trial over a violent plot to kidnap Michigan's Democratic governor in 2020.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-60960772",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5792/production/_123981422_whitmerindex.jpg",
      "publishedAt": "2022-04-01T22:52:23.6562556Z",
      "content": "Image source, Getty Images\r\nJurors have begun deliberations in the trial of four men accused of a violent plot to kidnap Michigan's Democratic governor in 2020.\r\nThe government says the four co-defen… [+2630 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Researchers create slimy, magnetic 'soft robot'",
      "description": "The team hope the slime could one day be used to collect accidentally-swallowed objects.",
      "url": "http://www.bbc.co.uk/news/science-environment-60961184",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D1AD/production/_123977635_p0byz4nk.jpg",
      "publishedAt": "2022-04-01T20:52:22.2964192Z",
      "content": "Researchers at The Chinese University of Hong Kong have created a \"soft robot\" made of slime containing magnetic particles, which can be manipulated using external magnets. \r\nThe magnetic particles a… [+381 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Amazon beaten by workers in fight for unionisation in New York",
      "description": "The Amazon Labor Union won a contest to establish the first unionised Amazon warehouse in the US.",
      "url": "http://www.bbc.co.uk/news/business-60944677",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/59E0/production/_123980032_tv075007346.jpg",
      "publishedAt": "2022-04-01T17:07:23.3128335Z",
      "content": "By Natalie ShermanBusiness reporter, New York\r\nImage source, Getty Images\r\nImage caption, Amazon Labor Union won a landmark union election in Staten Island, New York\r\nAmazon will be forced to recogni… [+5125 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <>
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          
          {this.state.articles.map ((element) => {
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsUrl= {element.url}/>
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


// we learned how to use this.state inside constructor