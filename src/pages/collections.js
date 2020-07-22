import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import CollectionsComponent from "../components/Collections/Collections"
import PageIntro from "../components/PageIntro/PageIntro"
import SEO from "../components/SEO"

const Collections = () => {
  return (
    <Layout>
      <SEO title="Collections" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All Collections"
            subTitle="Every Collection you could ask for in one place. Easy to list new Collections and expand your line"
            paragraph="When using Contentful you can add, remove, and edit you Collections as your business grows. Updating the content model is easy too. It's time to get started!"
          />
          <CollectionsComponent />
        </Grid>
      </section>
    </Layout>
  )
}

export default Collections
