import Head from 'next/head'
import DashboardLayout from '../../src/Components/Layout'
import Cabinet from '../../src/Components/Pages/Dashboard/Cabinet'
import Science from '../../src/Components/Pages/Admin/Science'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin page</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
      <Science/>
      </DashboardLayout>
    </div>
  )
}
