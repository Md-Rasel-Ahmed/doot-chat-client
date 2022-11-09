function ChangePassword() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Change Password
        </h1>

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
              Old Password
            </label>
            <input
              placeholder="Enter old password"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              New Password
            </label>
            <input
              placeholder="Enter new password"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm new Password
            </label>
            <input
              placeholder="Enter confirm new password"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 box-border text-right">
            <button className="w-1/3  py-2 mr-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Save
            </button>
            <button className="w-1/3  py-2 tracking-wide text-black transition-colors duration-200 transform bg-slate-400 rounded-md ">
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
