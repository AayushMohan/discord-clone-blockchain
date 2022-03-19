import Image from "next/image";
import personPlus from "../assets/icons/person-plus.svg";
import video from "../assets/icons/video.svg";
import inbox from "../assets/icons/inbox.svg";
import phone from "../assets/icons/phone.svg";
import helpers from "../assets/icons/help.svg";
import pin from "../assets/icons/pin.svg";
import at from "../assets/icons/at.svg";
import styles from "../styles/chatHeader.module.css";
import ethLogo from "../assets/eth.png";
import { useContext } from "react";
// import { DiscordContext } from "../context/context";

const currentAccount = "0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD";

const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <Image height={28} width={28} src={at} className={styles.svg} alt="" />
        <h3 className={styles.title}>Room Name</h3>
        <div className={styles.chatHeaderStatus} id="online" />
      </div>
      {currentAccount ? (
        <div className={styles.connectWallet}>
          <Image src={ethLogo} height={20} width={15} alt="ethLogo" />
          <span className={styles.separator}>{"|"}</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        </div>
      ) : (
        <div className={styles.connectWallet} onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
