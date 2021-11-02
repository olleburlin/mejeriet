import PropTypes from "prop-types"
import React from "react"

import Header from "./header"
import Footer from "../components/footer"

function Layout({ children }) {
  return (
    <div
      id="wrapper"
      className="min-h-screen flex flex-col light:bg-gray-300 bg-black text-white "
    >
      <Header />

      <main className="flex-1 w-full px-4 md:px-8 py-8 max-w-screen-2xl mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
