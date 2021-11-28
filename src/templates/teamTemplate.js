import { graphql } from "gatsby"
import React from "react"
// import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function BlogTemplate({ data }) {
  const { name, country, website, logo } = data.strapiTeams

  const image = getImage(logo.localFile)

  return (
    <Layout>
      <div className="container">
        <div className="preview">
          {/* <ReactMarkdown children={content} /> */}
          <GatsbyImage image={image} alt={name} className="logo" />
          <h1>{name}</h1>
          <span>{country}</span>
          <a href={website} target="_blank" rel="noreferrer">
            <p>{website}</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    strapiTeams(slug: { eq: $slug }) {
      name
      country
      website
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`
