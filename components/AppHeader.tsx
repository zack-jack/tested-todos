import type { UserProfile } from "@auth0/nextjs-auth0";
import ThemeToggle from "components/ThemeToggle";

type AppHeaderProps = {
  user: UserProfile | null;
};

const AppHeader = ({ user }: AppHeaderProps): JSX.Element => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h1>Todo</h1>
        <div className="flex items-center">
          <ThemeToggle />
          {!user && (
            <a href="/api/auth/login" className="ml-6">
              Login
            </a>
          )}
          {user && (
            <a href="/api/auth/logout" className="ml-6">
              Logout
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
