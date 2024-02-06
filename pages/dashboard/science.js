import Head from "next/head";
import DashboardLayout from "../../src/Components/Layout";
import Science from "../../src/Components/Pages/Dashboard/Science";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fanlar</title>
        <meta name="description" content="Abituriyenlar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Science />
      </DashboardLayout>
    </div>
  );
}
