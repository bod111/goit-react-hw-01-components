import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
