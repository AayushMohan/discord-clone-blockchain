import styles from "../styles/chatView.module.css";
import ChatHeader from "./ChatHeader";
import { useContext } from "react";
// import { DiscordContext } from "../context/context";

const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messageContainer}></div>
    </div>
  );
};

export default ChatView;
