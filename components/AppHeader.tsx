import ThemeToggle from "components/ThemeToggle";

const AppHeader = (): JSX.Element => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h1>Todo</h1>
        <div className="flex items-center">
          <ThemeToggle />
          <button type="button" className="ml-6">
            Login
          </button>
          <button type="button" className="ml-6">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
