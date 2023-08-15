import PropTypes from "prop-types"
import React from "react"
import CookieConsent, { Cookies } from "react-cookie-consent"
import Header from "./header"
import Footer from "../components/footer"
import Link from "./common/Link"

function Layout({ children }) {
  return (
    <div
      id="wrapper"
      className="min-h-screen flex flex-col  text-white bg-black dark:text-white text-xl"
    >
      <Header />

      <main className="flex-1 w-full px-4 md:px-8  md:max-w-screen-xl mx-auto">
        {children}
      </main>

      <Footer />
      <>
        <CookieConsent
          // disableStyles
          // location="bottom"
          debug
          buttonText="Jag förstår"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2f255b" }}
          buttonStyle={{
            color: "#2f255b",
            background: "#ffffff",
            fontSize: "13px",
          }}
          expires={150}
        >
          Kulturmejeriet.se använder cookies för att optimera dess
          funktionalitet samtidigt som det hjälper oss att utveckla och
          förbättra din upplevelse på våra webbplatser.{" "}
          <Link to="/cookies" className="underline">
            Läs mer
          </Link>
        </CookieConsent>
      </>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
