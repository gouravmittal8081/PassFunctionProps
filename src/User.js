import React from "react";

function User(props) {
  return (
    <div>
      <h2>Function pass a props</h2>
      {/* ye onclick walal props se data ke thrue jayega or App.js me output dega */}
      <button onClick={() => props.data()}>Call the data function</button>
    </div>
  );
}
export default User;
