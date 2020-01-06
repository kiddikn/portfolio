import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SkillTag from "../components/skillTag"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const subTitle = data.site.siteMetadata.subTitle
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="products" />
        <section id="banner">
          <div className="inner">
            <h2>{siteTitle}</h2>
            <p>{subTitle}</p>
          </div>
          {/* <Scroll type="id" element="one">
            <a href="#one" className="more">
              Learn More
            </a>
          </Scroll> */}
        </section>

        <section id="one" className="wrapper style1 special">
          <div className="inner">
            <header className="major">
              <h2>
                明るく楽しく元気よく活動します！
              </h2>
              <p>
                ライフセービング活動をしながらエンジニアをしています。
                趣味で作成したサイトを記載します。
              </p>
            </header>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const skill = node.frontmatter.skills || []
              const img = node.frontmatter.featuredImage.childImageSharp.fluid

              return (
                <section className="spotlight" key={node.fields.slug}>
                  <div className="content">
                    <h2>
                      {/* <Link style={{ boxShadow: `none` }} to={node.fields.slug}> */}
                        {title}
                      {/* </Link> */}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: node.html,
                      }}
                    />
                    <SkillTag skills={skill} />
                  </div>
                  <div className="image">
                    <Img
                      fluid={img}
                      alt={title}
                    />
                  </div>
                </section>
              )
            })}
        </section>

        <section id="three" className="wrapper special style3 career">
          <header className="major">
            <h2>略歴</h2>
          </header>
          <div className="inner">
            <ul className="features">
              <li>
                <h3>学歴</h3>
                <p>筑波大学情報学群情報科学類<br/>(2011.04〜2015.03)</p>
              </li>
              <li>
                <h3>職歴</h3>
                <p>DIT EM(2015.04〜2019.06)</p>
                <p>DIT eB(2019.07〜)</p>
              </li>
              <li>
                <h3>技術</h3>
                <p className="briefHistory">
                  ・C#<br/>
                  ・VB.NET<br/>
                  ・Java<br/>
                  ・Django2<br/>
                  ・CakePHP2<br/>
                  ・HTML/CSS<br/>
                  ・JavaScript<br/>
                  ・React.js(本サイトで勉強中)<br/>
                  ・競プロ(<a href="https://atcoder.jp/users/kiddikn">Atcoder</a>)
                </p>
              </li>
              <li>
                <h3>資格</h3>
                <p className="briefHistory">
                  ・基本情報技術者<br/>
                  ・応用情報技術者<br/>
                  ・日商簿記検定2級<br/>
                  ・中学教員免許(数学)<br/>
                  ・高校教員免許(数学・情報)
                </p>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
      subTitle
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {slug: {regex: "^/products/"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          skills
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
  
}
`
