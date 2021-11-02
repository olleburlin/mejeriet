const myQuery = `{
    program: allWpProgrampunkt(
      sort: { fields: informationProgram___startdatum, order: ASC }
    ) {
      nodes {
        title
        id
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FLUID
                  maxWidth: 270
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        informationProgram {
          borjar
          kategori
          kortInfo
          oppnar
          plats
          samarbetspartner
          slutar
          startdatum
        }
      }
    }
  }`;

module.exports = myQuery;
