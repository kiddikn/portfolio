import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer()  {
    const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          socialLinks {
            style
            icon
            name
            url
          }
        }
      }
    }
  `)

    return (
      <footer id="footer">
        <ul className="icons">
          {data.site.siteMetadata.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; 2019- kiddikn</li>
        </ul>
      </footer>
    )
}
