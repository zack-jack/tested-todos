import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import * as React from "react";
import useSWR from "swr";
import { todoFetcher } from "utils/todoFetcher";

import AppHeader from "components/AppHeader";
import CreateTodoForm from "components/CreateTodoForm";
import Todos from "components/Todos";

const Home: NextPage = () => {
  const { user } = useUser();
  const { data } = useSWR("/api/todo", todoFetcher);

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
          <CreateTodoForm />
          <Todos todos={data?.todos || []} />
        </div>
      </main>
    </>
  );
};

export default Home;
