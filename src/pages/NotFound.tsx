import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-4">Oops! Page not found.</p>
      <Link className="text-blue-500 underline" to="/">
        Go back home
      </Link>
    </div>
  );
};
