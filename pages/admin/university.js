import Head from 'next/head'
import DashboardLayout from '../../src/Components/Layout'
import Cabinet from '../../src/Components/Pages/Dashboard/Cabinet'
import University from '../../src/Components/Pages/Admin/University'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin page</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <University/>
      </DashboardLayout>
    </div>
  )
}
