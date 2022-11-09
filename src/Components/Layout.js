import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Blank from "./inbox/chatbody/Blank";
import Inbox from "./../pages/messages/Inbox";
import Chatitems from "./inbox/Chatitems";
import Conversations from "./../pages/Conversations";
import io from "socket.io-client";

export default function FullWidthGrid() {
  const { id } = useParams();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    let checkDark = JSON.parse(localStorage.getItem("dark"));
    setIsDark(checkDark);
  }, [setIsDark]);
  const handleDark = () => {
    // setIsDark(!isDark);
    localStorage.setItem("dark", JSON.stringify(isDark));
  };

  return (
    <div
    // className={`h-screen ${
    //   !isDark ? "bg-slate-800	 text-white" : "bg-white	 text-black"
    // }`}
    >
      <div className="flex md:flex-row flex-col-reverse xs h-full">
        <div className="basis-1/12 border-r">
          <Navbar />
        </div>
        <div className=" overflow-auto md:basis-3/12 sm:basis-11/12 border p-2">
          <Conversations />
        </div>
        <div className="overflow-auto  basis-8/12 border ">
          {/* <Inbox /> */}
          <Outlet />
          {!id && <Blank />}
        </div>
      </div>
    </div>
  );
}
