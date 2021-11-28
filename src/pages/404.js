import React from "react"
import Layout from "../components/Layout"

export default function error() {
  return (
    <Layout>
      <div className="container">
        <h1>Opps!</h1>
        <p>This page does not exist</p>
      </div>
    </Layout>
  )
}
