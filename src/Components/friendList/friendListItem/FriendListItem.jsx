import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span
        className={friend.isOnline ? styles.statusIn : styles.statusOut}
      ></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
