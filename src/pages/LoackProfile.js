function LockProfile() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Lock screen
        </h1>
        <p className="text-center">Enter your password to unlock the screen!</p>

        <div className="text-center mt-8">
          <div className="avatar ">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <h1 className="text-lg">Md Rasel Ahemd</h1>
        </div>

        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              placeholder="Enter password"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Unlock
            </button>
          </div>
        </form>
        <div className="mt-4 text-grey-600 text-center">
          Not you ? return /
          <span>
            <a className="text-purple-600 hover:underline" href="#f">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LockProfile;
