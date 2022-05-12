import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import AppHeader from "components/AppHeader";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Tested Todos</title>
        <meta name="description" content="Todo app to highlight testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <div className="container py-6 mx-auto">
          <AppHeader user={user || null} />
        </div>
      </main>
    </>
  );
};

export default Home;
