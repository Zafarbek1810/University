import Head from 'next/head'
import Partners from '../src/Components/Pages/Partners'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abituriyenlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Partners/>
    </div>
  )
}
