import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "yellow-metal-design-decoration.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const CollectionItem = styled.article`
  width: 100%;
  padding: 0 20px;
`

const CollectionContent = styled.div`
  background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const CollectionImg = styled.div`
  height: 185px;
`

const Collection = ({ collection }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, slug, images } = collection

  let mainImage = images ? images[0].fluid : img

  return (
    <CollectionItem>
      <Image fluid={mainImage} alt="single Collection">
        <CollectionImg />
      </Image>
      <CollectionContent>
        <h2>{name || "Name not listed"}</h2>
        <AniLink className="btn" cover bg="#1d1d1d" to={`/collections/${slug}`}>
          View Collection
        </AniLink>
      </CollectionContent>
    </CollectionItem>
  )
}

Collection.propTypes = {
  collection: propTypes.shape({
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Collection
