import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import { rhythm } from "../utils/typography"
import '../assets/sass/main.scss';

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
          <footer id="footer">
            <ul className="copyright">
              <li>&copy; 2019- kiddikn</li>
            </ul>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
