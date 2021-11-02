import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function MatPage({ data }) {
  const { content, title, underKategorier } = data.wpPage
  const subCategories = underKategorier?.underkategori

  return (
    <Layout>
      {title}
      {subCategories.map(category => {
        return <SubCategory key={category.namn} category={category} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(slug: { eq: "mat" }) {
      slug
      title
      content
      underKategorier {
        underkategori {
          namn
          sidlank {
            ... on WpPage {
              id
              slug
            }
          }
          utvaldBild {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`

function SubCategory({ category }) {
  const { namn, utvaldBild, sidlank } = category
  return (
    <div className="w-full h-full">
      <div>
        {namn}
        {sidlank.slug}
      </div>
      <GatsbyImage image={getImage(utvaldBild?.localFile.childImageSharp)} />
    </div>
  )
}
