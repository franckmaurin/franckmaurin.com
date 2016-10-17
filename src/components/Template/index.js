import React from 'react'

const Template = (params) => (
  <html>
    <head>
      {params.head.title.toComponent()}
      {params.head.meta.toComponent()}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
      <link rel="stylesheet" href="/assets/css/build.css" media="all" />
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: params.body }}
      />
      <script src="/assets/js/build.js" />
    </body>
  </html>
)

export default Template
