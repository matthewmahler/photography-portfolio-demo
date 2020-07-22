import React from "react"
import Grid from "../Grid/Grid"
import Collection from "../Collections/Collection"
import Button from "../Button/Button"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const getCollections = graphql`
  query {
    featuredCollections: allContentfulCollections(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          contentful_id
          slug
          description {
            description
          }
          images {
            fluid(quality: 90, maxWidth: 768) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const FlexContainer = styled.div`
  grid-column: 1/4;
  margin-left: -20px;
  margin-right: -20px;
  @media (min-width: 768px) {
    grid-column: 2 / 4;
    display: flex;
    justify-content: space-between;

    p {
      margin-top: 0;
    }
  }
`

const FlexItem = styled.div`
  flex: 0 0 50%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`

const FeaturedCollections = ({ largePadding, id }) => {
  const response = useStaticQuery(getCollections)
  const collections = response.featuredCollections.edges

  return (
    <section
      id={id}
      className={largePadding ? "section-padding--large" : "section-padding"}
    >
      <Grid>
        <TitleArea>
          <Title>Displaying your featured Collections is easy</Title>
          <p>
            Your featured Collections are listed here, a great way of showcasing
            your best items to your users
          </p>
          <Button text="All Collections" link="/Collections" />
        </TitleArea>
        <FlexContainer>
          {collections.map(({ node }) => {
            return (
              <FlexItem>
                <Collection key={node.contentful_id} collection={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Grid>
    </section>
  )
}

export default FeaturedCollections
