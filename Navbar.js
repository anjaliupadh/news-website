import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  
  render() {
    let { title, imageUrl, newsUrl, source, author } = this.props;
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav me-auto mb-2-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
            </ul>
           
          </div>
          <ul className="navbar-nav me-auto mb-2-lg-0">
            <li className='nav-item'>{this.totalResults}</li>
            </ul>
          
      
        </div>
      </nav>
    );
  }
}

export default Navbar;
