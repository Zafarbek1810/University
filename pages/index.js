import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UFA University</title>
        <meta name="description" content="UFA University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
}
