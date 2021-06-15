import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () =>  {
  return (
    <Layout pageTitle="Home Page">
      <p>This is just some random introduction paragraph.</p>
      <StaticImage 
      alt="random image"
      src="../images/ballon.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
