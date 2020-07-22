import React from "react"
import CollectionList from "./CollectionList"
import { useStaticQuery, graphql } from "gatsby"

const getCollections = graphql`
  query {
    collections: allContentfulCollections {
      edges {
        node {
          name
          contentful_id
          slug
          description {
            description
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Collections = () => {
  const { collections } = useStaticQuery(getCollections)
  return <CollectionList collections={collections} />
}

export default Collections
