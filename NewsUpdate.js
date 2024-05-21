import React from 'react';

export class NewsUpdate extends React.Component {
  render() {
    let { title, imageUrl, newsUrl, source, author } = this.props;
    return (
      <div className='my-3 bg-dark-subtle'>
        <div className='card' style={{ width: "25rem" }}>
          <div className="card-header bg-danger-subtle">
            {source}
          </div>
          <img src={imageUrl} className="card-img-top" alt="news" height="190px" />
          <div className="card-body">
            <div style={{ height: '100px' }}>
              <h5 className="card-title">{title}...</h5>
            </div>
            <a target='_blank' rel='noreferrer' href={newsUrl} className="btn btn-primary">Read</a>
          </div>
          <div className="card-footer fw-lighter">
            <cite title='Source Title'>
              By: {!author ? source : author}
            </cite>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate;
