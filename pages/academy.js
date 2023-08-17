import Head from 'next/head'
import Academy from '../src/Components/Pages/Academy'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Academy</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Academy/>
    </div>
  )
}
