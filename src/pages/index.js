import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SkillTag from "../components/skillTag"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const subTitle = data.site.siteMetadata.subTitle
    const author = data.site.siteMetadata.author
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="products" />
        <section id="banner">
          <div className="inner">
            <h2>{siteTitle}</h2>
            <p>{subTitle}</p>
            <Img
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 100,
                minHeight: 100,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>{author}</p>
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
              <button><a href="./tide">Reactでapi取得練習中→</a></button>
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
                <p>DIT eB(2019.07〜2020.09)</p>
                <p>株式会社スタジアム(2020.10〜)</p>
              </li>
              <li>
                <h3>技術</h3>
                <p className="briefHistory">
                  ・Go<br/>
                  ・C#<br/>
                  ・VB.NET<br/>
                  ・Java<br/>
                  ・HTML/CSS<br/>
                  ・JavaScript<br/>
                  ・React.js(本サイトで勉強中)<br/>
                  ・Django2<br/>
                  ・CakePHP2<br/>
                  ・競プロ(<a href="https://atcoder.jp/users/kiddikn">Atcoder</a>)
                </p>
              </li>
              <li>
                <h3>資格</h3>
                <p className="briefHistory">
                  ・中学校教諭一種免許状(数学)<br/>
                  ・高等学校教諭一種免許状(数学・情報)<br/>
                  ・基本情報技術者<br/>
                  ・応用情報技術者<br/>
                  ・日本商工会議所簿記検定試験2級<br/>
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
      author
    }
  }
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
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
