import { Link } from "react-router-dom";
import ThemeModeToggle from "./ThemeModeToggle";
import useAuth from "../../../hooks/useAuth";
import useProvideAuth from "../../../hooks/useProvideAuth";

const Navbar = () => {
  const { user } = useAuth();
  const { signOut } = useProvideAuth();
  return (
    <nav className="flex flex-row justify-between px-2 border-b-2 border-b-gray-400 dark:border-b-0 dark:bg-gray-800 py-2 w-full ">
      <ThemeModeToggle />
      {user ? (
        <div className="mt-auto text-gray-800 dark:text-gray-300 ">
          <Link to="/user/posts" className="mr-2">
            My place
          </Link>
          <Link to="/">Posts</Link>
          <button className="ml-2" onClick={signOut}>
            Logout
          </button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
