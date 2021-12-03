import React from "react"
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../../components/common/PageHeader"
import { StandardForm } from "../../components/common/Forms"

export default function KontaktPage() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 8971 }) {
        id
        title
        content
        kontaktaOss {
          fragor {
            fraga
            svar
          }
        }
      }
    }
  `)
  const { title, content, kontaktaOss } = data.wpPage
  const questions = kontaktaOss.fragor

  return (
    <div>
      <Layout>
        <div className="max-w-4xl mx-auto pb-16">
          <PageHeader text={data.wpPage.title} />
          <div className="text-xl font-heavy wp-content pb-4">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="space-y-4"
            />
          </div>
          <div className="">
            {questions.map(question => {
              return <Question key={question.id} question={question} />
            })}{" "}
          </div>
          <div className="border-t-4 border-brandteal py-8 mt-8">
            <StandardForm />
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
