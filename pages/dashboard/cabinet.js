import Head from 'next/head'
import DashboardLayout from '../../src/Components/Layout'
import Cabinet from '../../src/Components/Pages/Dashboard/Cabinet'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cabinet</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
      <Cabinet/>
      </DashboardLayout>
    </div>
  )
}
