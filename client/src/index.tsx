import React from "react"
import ReactDom from "react-dom"
import { App } from "./App.tsx"

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.createElement("div", { id: "root" })
  document.body.appendChild(rootEl)

  ReactDom.render(
    <App />,
    rootEl
  )
})
