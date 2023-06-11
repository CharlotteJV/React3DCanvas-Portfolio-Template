import React from 'react'
import ReactDOMServer from 'react-dom/server'
export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>

    </React.StrictMode>
  )
  return { html }
}
