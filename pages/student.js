import Head from 'next/head'
import Student from '../src/Components/Pages/Student'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abituriyenlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Student/>
    </div>
  )
}
