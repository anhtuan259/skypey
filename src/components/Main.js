import React from "react";
import "./main.css"
import Empty from "../components/Empty";
import ChatWindow from "./ChatWindow/ChatWindow";

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            return <ChatWindow activeUserId={activeUserId} />;
        }
    };
    return <main className="Main">{renderMainContent()}</main>;
};
export default Main;