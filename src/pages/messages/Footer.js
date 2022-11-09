import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import {
  useGetConversationsQuery,
  useUpdateConversationsMutation,
} from "../../features/conversations/conversationsApi";
import { useAddMessagesMutation } from "../../features/messages/messagesApi";
import { auth } from "../../firebase_init";
function Footer({ id, participants }) {
  const [user] = useAuthState(auth);

  const [msg, setMsg] = useState("");
  const [addMessages, { isLoading, error }] = useAddMessagesMutation();
  const { data: conversations } = useGetConversationsQuery();
  const [updateConversations, {}] = useUpdateConversationsMutation();

  const findConver = conversations?.find((con) => con.id === id);
  // console.log(findConver?.email);

  // console.log(id);
  const sendMessage = () => {
    if (!msg) {
      return toast.error("cannot send message to emty");
    } else {
      updateConversations({
        id: id,
        data: {
          participants: findConver.participants,
          users: [
            { email: user?.email },
            { email: findConver?.participants.split("-")[1].email },
          ],
          message: msg,
          timestamp: Date.now(),
        },
      });

      addMessages({
        id: id,
        sender: {
          email: user?.email,
        },
        receiver: {
          email: participants.split("-")[1].email,
        },
        message: msg,
        timestamp: Date.now(),
      });
      setMsg("");
    }
  };
  return (
    <div>
      <footer>
        <footer className="footer items-center p-2 bg-neutral text-neutral-content">
          <div className="items-center  grid-flow-col m-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <div className="footer-serach-field ">
              <input
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type here"
                className="input search-input text-black"
              />
            </div>
            <div className="voice">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div className="sendBtn">
              <button onClick={sendMessage} className="btn btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

export default Footer;
