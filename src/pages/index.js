import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const teams = data.allStrapiTeams.edges

  return (
    <Layout>
      <div className="container">
        {teams.map(team => {
          const image = getImage(team.node.logo.localFile)

          return (
            <div className="item" key={team.node.id}>
              <GatsbyImage
                image={image}
                alt={team.node.name}
                className="logo"
              />
              <Link to={`/team/${team.node.slug}`}>
                <h1>{team.node.name}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiTeams(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          name
          country
          website
          slug
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
    }
  }
`
