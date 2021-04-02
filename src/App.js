import React, { useRef } from "react";
// action to dispatch
import { useSelector, useDispatch } from "react-redux";
// useSelector -> access state
// useDispatch -> dispatch action

import { increment, decrement, reset, addUser, removeUser } from "./actions";

const App = () => {
  const count = useSelector((state) => state.counter);
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={userRef} />
      </form>
      <ul>
        {users.map((user, index) => (
          <>
            <li key={index}>{user.name}</li>
            <button onClick={() => dispatch(removeUser(index))}>&times;</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
