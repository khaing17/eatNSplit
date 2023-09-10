import React, { useState } from "react";
import Button from "./Button";
import { initialFriends } from "./App";
import FormSplitBill from "./FormSplitBill";
import FormAddFri from "./FormAddFri";
import FriendList from "./FriendList";

export function EatNSplit() {
  const [friends, setFriends] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriendForm() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    // console.log(friend);
    // @ts-ignore
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends(
      friends.map((friend) =>
        selectedFriend.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <>
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFri onAddFriend={handleAddFriend} />}
        <Button onClick={handleAddFriendForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </>
  );
}
