import React from "react";

function Member(props) {
  return (
    <div>
      <h5>Member function file</h5>
      {/* ye onclick walal props se data ke thrue jayega or App.js me output dega */}
      <button onClick={() => props.data()}>Call the data function</button>
    </div>
  );
}
export default Member;
