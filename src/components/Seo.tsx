const SITE = 'portfolio.trivedev.uk'

interface SeoProps {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
    </>
  )
}
