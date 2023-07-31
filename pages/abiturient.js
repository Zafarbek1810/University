import Head from 'next/head'
import Abiturient from '../src/Components/Pages/Abiturient'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abituriyenlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Abiturient/>
    </div>
  )
}
