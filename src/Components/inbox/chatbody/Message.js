import { useDeleteMessageMutation } from "../../../features/messages/messagesApi";

export default function Message({ justify, message, color, time, id }) {
  const [deleteMessage] = useDeleteMessageMutation();
  const handleDeleteMessage = (id) => {
    deleteMessage(id);
  };
  return (
    <li className={`flex justify-${justify}`}>
      <div
        className={`relative mt-5 max-w-xl px-4 py-2 text-gray-700 rounded shadow ${color}`}
      >
        <span
          onClick={() => handleDeleteMessage(id)}
          className={`block cursor-pointer`}
        >
          {message}
        </span>
        <p className="text-sm text-red-500">{time}</p>
      </div>
    </li>
  );
}
