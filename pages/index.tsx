import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import * as React from "react";
import useSWR from "swr";
import { todoFetcher } from "utils/todoFetcher";
import AppHeader from "components/AppHeader";
import CreateTodoForm from "components/CreateTodoForm";
import Todos from "components/Todos";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { data } = useSWR(`/api/todos/${session?.user?.id || ""}`, todoFetcher);

  return (
    <>
      <Head>
        <title>Tested Todos</title>
        <meta name="description" content="Todo app to highlight testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-3xl pb-20 mx-auto text-gray-800 dark:text-gray-300">
          <AppHeader isAuthenticated={status === "authenticated"} />
          {status === "loading" && <></>}
          {status === "authenticated" && (
            <>
              <CreateTodoForm />
              <Todos todos={data?.todos || []} />
            </>
          )}
          {status === "unauthenticated" && (
            <div className="flex flex-col items-center justify-center p-20">
              <h2 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-300">
                Hello there
              </h2>
              <h3 className="mt-20 text-4xl">Please log in to begin</h3>
              <button
                type="button"
                className="mt-8 c-btn"
                onClick={() => signIn()}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
