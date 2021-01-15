import React from "react"
import { Helmet } from "react-helmet"

export default props => {
    const baseTitle = "みぃ"
    const baseDesc = "コミュニティ「みぃ」"
    const title = props.title ? `${props.title} - ${baseTitle}` : baseTitle
    const description = props.desc ? `${props.desc} - ${baseDesc}` : baseDesc
    const image = require("../images/mii.png")

    return (
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
    )
  }