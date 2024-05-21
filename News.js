import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "general",
  }

  static propTypes = {
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });
  }

  componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults || 0,
      page: nextPage,
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h6 className='text-center'>Top Headlines</h6>
        <h5>Total Results: {this.state.totalResults}</h5>
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className='row'>
            {this.state.articles && this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsUpdate 
                    title={element.title} 
                    newsUrl={element.url} 
                    description={element.description} 
                    imageUrl={element.urlToImage} 
                    source={element.source.name} 
                    author={element.author} 
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
