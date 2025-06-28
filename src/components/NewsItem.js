import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgSrc, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ margin: "25px" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
            {source}
          </span>
          <img src={imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
