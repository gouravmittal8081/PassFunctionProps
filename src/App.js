import "./styles.css";
import User from "./User";

import Member from "./Member";
export default function App() {
  function getData() {
    console.log("maker a form");
  }

  return (
    <div className="App">
      {/* ye User wala tag getData function ko call karega and uske */}
      <User data={getData} />
      <div>
        {/* same ese hi Member wala tag bhi getData function ko call karega and uske */}
        <Member data={getData} />
      </div>
    </div>
  );
}
