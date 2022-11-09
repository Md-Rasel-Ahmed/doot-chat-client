import { useState } from "react";
import { useGetUserQuery } from "../features/users/usersApi";
import { toast } from "react-toastify";
import io from "socket.io-client";

import {
  useAddConversationsMutation,
  useGetConversationsQuery,
  useUpdateConversationsMutation,
} from "../features/conversations/conversationsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase_init";
import { useParams } from "react-router-dom";
import { useAddMessagesMutation } from "../features/messages/messagesApi";
function Modal() {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const { data } = useGetUserQuery();
  const [addConversations, { isLoading, isSuccess }] =
    useAddConversationsMutation();
  const [updateConversations, {}] = useUpdateConversationsMutation();
  const { data: conversations } = useGetConversationsQuery();
  const [addMessages, {}] = useAddMessagesMutation();

  const [user] = useAuthState(auth);

  const handleSendMsg = () => {
    const findUser = data.find((user) => user.email === email);
    const findConver = conversations.find(
      (con) => con.participants === `${user?.email}-${email}`
    );
    // console.log(findConver);
    // console.log(findUser._id);
    if (!findUser) {
      return toast.error("User not founded try again");
    } else if (!findConver) {
      addConversations({
        id: findUser?._id,
        participants: `${user?.email}-${email}`,
        users: [
          {
            email: user?.email,
            name: user?.displayName,
            id: 1,
          },
          {
            email: findUser.email,
            name: findUser.name,
            id: 2,
          },
        ],
        message: msg,
        timestamp: Date.now(),
      });
    } else if (findConver) {
      updateConversations({
        id: findConver.id,
        data: {
          email: user?.email,
          participants: `${user?.email}-${email}`,
          timestamp: Date.now(),
          message: msg,
          name: findUser.name,
        },
        participants: `${user?.email}-${email}`,
      });
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id="addConversations-modal"
        className="modal-toggle"
      />
      <label htmlFor="addConversations-modal" className="modal cursor-pointer">
        <label className="modal-box relative " htmlFor="">
          <div className="flex justify-between border-b py-2">
            <h3 className="text-lg font-bold text-black">Add Contact</h3>
            <label htmlFor="addConversations-modal" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className="border-b py-3">
            <div className="email mt-2">
              <p>Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email here"
                className="input input-bordered w-full "
              />
            </div>

            <div className="messages mt-2">
              <p>Invatation Message</p>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Message here.."
              ></textarea>
            </div>
          </div>
          <div className=" modal-action modal-footer py-5 flex justify-end">
            <label htmlFor="addConversations-modal" className="btn btn-warning">
              Close
            </label>
            <button onClick={handleSendMsg} className="btn btn-success">
              Invite
            </button>
          </div>
        </label>
      </label>
    </div>
  );
}

export default Modal;
