import Modal from "./../ui/Modal";
import Chatitems from "./../Components/inbox/Chatitems";
import { auth } from "../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
function Conversations() {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div className="py-2 ">
        <div className="head flex justify-around items-center ">
          <h1 className="text-2xl font-bold px-8">Chats</h1>
          <h1>{user?.email}</h1>
          <label
            htmlFor="addConversations-modal"
            className="btn btn-outline btn-success border-0 bg-slate-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </label>
          <Modal />
        </div>
        <div className="search mt-4">
          <input
            type="text"
            placeholder="Search here..."
            className="input w-full   max-w-4xl	 bg-slate-200 focus:ordered-none "
          />
        </div>
      </div>
      <Chatitems />
    </div>
  );
}

export default Conversations;
