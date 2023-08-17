import Head from 'next/head'
import LoginPage from '../src/Components/Pages/LoginPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage/>
    </div>
  )
}
