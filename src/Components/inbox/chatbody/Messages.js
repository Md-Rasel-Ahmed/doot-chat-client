import Message from "./Message";
import { useSelector } from "react-redux";
import moment from "moment/moment";
export default function Messages({ messages }) {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">
        {messages?.map((message) => {
          console.log(message);
          const { sender, id, message: msg, timestamp } = message;
          return (
            <Message
              justify={sender.email === auth?.user.email ? "end" : "start"}
              message="fkdj"
            />
          );
        })}
      </ul>
    </div>
  );
}
