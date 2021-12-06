import React from "react";
// import PropTypes from 'prop-types'
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import data from "../data/";
import FriendList from "./friendList/FriendList";
import TransactionHistiry from "./transactionHistiry/TransactionHistiry";

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

// App.propTypes = {

// }

export default App;
