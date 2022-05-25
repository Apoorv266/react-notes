import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
          This is news component
          <Newsitem/>
      </div>
    )
  }
}

export default News

// render() is a lifecycle method and it helps in compiling jsx to html and rendering html on screen