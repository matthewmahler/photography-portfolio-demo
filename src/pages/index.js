import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import StyledAbout from "../components/StyledAbout/StyledAbout"
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/SEO"
import { Link } from "react-scroll"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      aboutSectionImg: file(
        relativePath: { eq: "john-towner-89PFnHKg8HE-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuredCollectionsImg: file(relativePath: { eq: "bark.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner
          title={data.site.siteMetadata.title}
          info={data.site.siteMetadata.description}
        >
          <Link className="btn" to="about" smooth={true} duration={500}>
            Learn More
          </Link>
        </Banner>
      </Hero>
      <StyledAbout
        gradient="true"
        img={data.aboutSectionImg.childImageSharp.fluid}
      >
        <About id="about" largePadding={true} />
      </StyledAbout>
      <Service largePadding={true} />
      <StyledAbout
        gradient="true"
        img={data.featuredCollectionsImg.childImageSharp.fluid}
      >
        <FeaturedCollections id="Collections" largePadding={true} />
      </StyledAbout>
    </Layout>
  )
}

export default Index
