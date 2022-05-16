import { signIn, signOut } from "next-auth/react";
import ThemeToggle from "components/ThemeToggle";

type AppHeaderProps = {
  isAuthenticated: boolean;
};

const AppHeader = ({ isAuthenticated }: AppHeaderProps): JSX.Element => {
  return (
    <header className="px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-[.3em] uppercase leading-none">
          Todo
        </h1>
        <div className="flex items-center">
          <ThemeToggle />
          {!isAuthenticated && (
            <button type="button" className="ml-6" onClick={() => signIn()}>
              Login
            </button>
          )}
          {isAuthenticated && (
            <button type="button" className="ml-6" onClick={() => signOut()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
