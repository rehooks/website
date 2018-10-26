import Head from 'next/head'

export default ({ title, description, image, url }) => (
  <Head>
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="twitter:card" content="summary_large_image" />}
    {image && <meta name="og:image" content={'https://rehooks.com' + image} />}
  </Head>
)
