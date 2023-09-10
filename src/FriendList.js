import React from "react";
import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}
