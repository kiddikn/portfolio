import React from "react"
import { Link } from "gatsby"

import '../assets/sass/main.scss';

import Footer from './footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { location, title, children } = this.props;
    const { isPreloaded } = this.state;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname !== rootPath) {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div 
        className={
          isPreloaded
            ? 'landing main-body is-preload'
            : 'landing main-body'
        }
      >
        <div id="page-wrapper">
          <header>{header}</header>
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default Layout
