function Logout() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <div className="text-center mt-8">
          <div className="avatar ">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
        <h1 className="text-lg text-center font-bold">You are Logged Out</h1>
        <p className="text-center">Thank you for using Doot</p>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Sing in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
