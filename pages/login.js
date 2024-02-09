import Head from 'next/head'
import LoginPage from '../src/Components/Pages/LoginPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Talaba shaxsiy kabinetiga kirish</title>
        <meta name="description" content="Shaxsiy kabinet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage/>
    </div>
  )
}
