import { Link } from "react-router-dom";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import ChatItem from "./Chatitem";
import moment from "moment";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase_init";
function Chatitems() {
  const [user] = useAuthState(auth);
  const { isLoading, data, isSuccess, isError, error } =
    useGetConversationsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  // console.log(data);
  return (
    isSuccess &&
    data
      ?.filter((d) => d.participants.match(user?.email))
      .map((conver) => {
        let n = conver.users.filter((u) => u.email !== user?.email);
        return (
          <>
            <Link to={`/convarsations/${conver.id}`}>
              <ChatItem
                key={conver._id}
                avatar={
                  <div className="avatar online">
                    <div className="w-10 rounded-full">
                      <img
                        alt="userPhoto"
                        src="https://placeimg.com/192/192/people"
                      />
                    </div>
                  </div>
                }
                lastMessage={conver.message}
                lastTime={moment(conver.timestamp).fromNow()}
                name={n[0]?.name}
              />
            </Link>
          </>
        );
      })
  );
}

export default Chatitems;
