import React from 'react'
import CEWfirst from '../../Components/careerepisodewriting/CEWfirst'
import CEWsecond from '../../Components/careerepisodewriting/CEWsecond'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import Script from 'next/script'

const CareerEpisodeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const  schemaData= {
    "@context": "http://schema.org",
    "@type": "Product",
    name: "CDR Report Writing Services for Engineers Australia",
    image: "https://cdrskillassessment.com/images/n2.png",
    description:
      "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
    url: "https://www.cdrassessmenthelp.com/services/career-episode-writing-australia",
    brand: {
      "@type": "Brand",
      name: "cdrskillassessment",
      logo: "https://www.cdrassessmenthelp.com/logo.png",
    },
    offers: {
      "@type": "Offer",
      price: "Negotiable",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 10,
      bestRating: 10,
      worstRating: 7,
      ratingCount: 20,
    },
  }

  return (
    <div>
       <Script type="application/ld+json">
      {JSON.stringify(schemaData)}
</Script>
      <Head>
        <title>CDR Three Career Episode Report Writing for Engineers Australia</title>
        <meta name='description' content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <CEWfirst/>
      <CEWsecond/>
    </div>
  )
}

export default CareerEpisodeWriting