import Head from 'next/head'
import DashboardLayout from '../../src/Components/Layout'
import Cabinet from '../../src/Components/Pages/Dashboard/Cabinet'
import Faculties from '../../src/Components/Pages/Admin/Faculties'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin page</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
      <Faculties/>
      </DashboardLayout>
    </div>
  )
}
