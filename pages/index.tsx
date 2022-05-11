import type { NextPage } from "next";
import Head from "next/head";
import AppHeader from "components/AppHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tested Todos</title>
        <meta name="description" content="Todo app to highlight testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <div className="container mx-auto py-6">
          <AppHeader />
        </div>
      </main>
    </>
  );
};

export default Home;
