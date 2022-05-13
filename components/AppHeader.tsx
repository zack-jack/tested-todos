import type { UserProfile } from "@auth0/nextjs-auth0";
import Link from "next/link";
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
            <Link href="/api/auth/login">
              <a className="ml-6">Login</a>
            </Link>
          )}
          {user && (
            <Link href="/api/auth/logout">
              <a className="ml-6">Logout</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
