import Head from 'next/head'
import DashboardLayout from '../../src/Components/Layout'
import Students from '../../src/Components/Pages/Admin/Students'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin page</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
      <Students/>
      </DashboardLayout>
    </div>
  )
}
