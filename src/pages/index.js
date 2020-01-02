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
                <p>筑波大学情報学群情報科学類(2011.04〜2015.03)</p>
              </li>
              <li>
                <h3>職歴</h3>
                <p>DIT EM(2015.04〜2019.06)</p>
                <p>DIT eB(2019.07〜)</p>
              </li>
              <li>
                <h3>技術</h3>
                <ul>
                  <li>C#</li>
                  <li>VB.NET</li>
                  <li>Java</li>
                  <li>Django2</li>
                  <li>CakePHP2</li>
                  <li>HTML5/CSS</li>
                  <li>JavaScript</li>
                  <li>React.js(勉強中・本ポートフォリオ)</li>
                </ul>
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
