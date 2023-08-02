import Head from 'next/head'
import Foreigners from '../src/Components/Pages/Foreigners'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abituriyenlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Foreigners/>
    </div>
  )
}
