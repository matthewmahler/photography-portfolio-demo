import React, { Component } from "react"
import styled from "styled-components"
import Collection from "./Collection"

const Section = styled.section`
  grid-column: 1 / 4;
  margin-left: -20px;
  margin-right: -20px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex: 0 0 calc(100% / 3);
  }
`

export default class CollectionList extends Component {
  state = {
    collections: [],
    sortedCollections: [],
  }

  componentDidMount() {
    this.setState({
      collections: this.props.collections.edges,
      sortedCollections: this.props.collections.edges,
    })
  }
  render() {
    return (
      <Section>
        <FlexContainer>
          {this.state.sortedCollections.map(({ node }) => {
            return (
              <FlexItem>
                <Collection key={node.contentful_id} collection={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Section>
    )
  }
}
