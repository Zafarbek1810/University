import Head from 'next/head'
import StudyPrograms from '../src/Components/Pages/StudyPrograms'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abituriyenlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StudyPrograms/>
    </div>
  )
}
