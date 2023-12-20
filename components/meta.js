import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
    </Head>
  )
}
