import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [urExpense, setUrExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const urFriExpense = bill - urExpense;

  function handleSubmit(e) {
    if (!bill || !urExpense) return;

    e.preventDefault();
    onSplitBill(whoIsPaying === "user" ? urExpense : -urFriExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={urExpense}
        onChange={(e) =>
          setUrExpense(
            Number(e.target.value) > bill ? urExpense : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" value={urFriExpense} disabled />

      <label>Who is paying the Bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={handleSubmit}>Split Bill</Button>
    </form>
  );
}
