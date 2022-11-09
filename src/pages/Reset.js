import { Link } from "react-router-dom";

function Reset() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Reset Password
        </h1>
        <p className="text-center">Reset Password with Doot.</p>
        <p className="bg-slate-200 p-2 text-center w-72 m-auto">
          Enter your Email and instructions will be sent to you!
        </p>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Reset
            </button>
          </div>
        </form>
        <div className="mt-4 text-grey-600 text-center">
          Remembar it ?
          <span>
            <Link to="/" className="text-purple-600 hover:underline" href="#f">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reset;
