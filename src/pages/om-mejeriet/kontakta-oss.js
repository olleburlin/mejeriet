import React from "react"
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../../components/common/PageHeader"
import { StandardForm } from "../../components/common/Forms"
import FeaturedImage from "../../components/common/FeaturedImage"
import LostAndFound from "../../components/forms/LostAndFound"

export default function KontaktPage() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 8971 }) {
        id
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        kontaktaOss {
          fragor {
            fraga
            svar
          }
        }
      }
    }
  `)
  const { title, content, kontaktaOss, featuredImage } = data.wpPage
  const questions = kontaktaOss.fragor

  return (
    <div>
      <Layout>
        <div id="page-template" className="min-h-screen py-8">
          <div className="max-w-4xl mx-auto pb-16 space-y-12 ">
            <PageHeader text={data.wpPage.title} />
            <div>
              <FeaturedImage image={featuredImage} />
            </div>
            <div className="text-xl font-heavy wp-content">
              <div dangerouslySetInnerHTML={{ __html: content }} className="" />
            </div>
            <div className="text-sm">
              {questions.map(question => {
                return <Question key={question.id} question={question} />
              })}{" "}
            </div>
            <div id="forms">
              <LostAndFound />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

function Question({ question }) {
  const { fraga, svar } = question
  return (
    <div className="my-4 text-xl">
      <div className="font-bold">
        <p className="">{fraga}</p>
      </div>
      <div>
        {" "}
        <div dangerouslySetInnerHTML={{ __html: svar }} className="" />
      </div>
    </div>
  )
}
