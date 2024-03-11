import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      class="h-screen w-full flex flex-col justify-center items-center "
    >
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring">
          <span class="relative block px-8 py-3  border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  );
};
export default ErrorPage;
