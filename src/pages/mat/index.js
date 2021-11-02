import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../../components/common/Link"
import PageHeader from "../../components/common/PageHeader"

export default function MatPage({ data }) {
  const { content, title, underKategorier } = data.wpPage
  const subCategories = underKategorier?.underkategori

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <PageHeader text="Mat" />
        <div className="text-xl font-heavy px-8 text-center my-16">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="space-y-4"
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-8">
          {subCategories.map(category => {
            return <SubCategory key={category.namn} category={category} />
          })}
        </div>
      </div>
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
              link
            }
          }
          utvaldBild {
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
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
    <Link to={sidlank.link}>
      <div className="w-full h-full bg-black relative">
        <div className="opacity-50 relative">
          <GatsbyImage
            image={getImage(utvaldBild?.localFile.childImageSharp)}
          />
        </div>
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <h2 className="uppercase text-4xl text-white">{namn}</h2>
        </div>
      </div>
    </Link>
  )
}
