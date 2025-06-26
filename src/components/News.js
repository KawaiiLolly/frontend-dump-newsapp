import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - TOP HEADLINES</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" imgSrc="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/ecf6/live/a235e0e0-5132-11f0-a2ff-17a82c2e8bc4.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" imgSrc="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/ecf6/live/a235e0e0-5132-11f0-a2ff-17a82c2e8bc4.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" imgSrc="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/ecf6/live/a235e0e0-5132-11f0-a2ff-17a82c2e8bc4.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
