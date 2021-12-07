import React from "react";
// import PropTypes from 'prop-types'
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from "../data/";
import FriendList from "./FriendList/FriendList";
import TransactionHistiry from "./TransactionHistiry/TransactionHistiry";

const App = () => {
  return (
    <>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" statistic={data.statistical} />;
      <Statistics statistic={data.statistical} />;
      <FriendList friends={data.friends} />
      <TransactionHistiry transactions={data.transactions} />
    </>
  );
};

export default App;
