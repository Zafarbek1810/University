import Head from 'next/head'
import Contacts from '../src/Components/Pages/Contacts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contacts/>
    </div>
  )
}
