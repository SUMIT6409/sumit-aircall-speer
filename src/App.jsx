import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DialPad from "./components/dashboard/Dialpad.jsx";
import Activity from "./components/dashboard/Activity.jsx";
import Archived from "./components/dashboard/Archived.jsx";

const App = () => {
  const onCallHandler = () => {
    console.log("onCall callback");
  };
  const onHangUpHandler = () => {
    console.log("onHangUp callback");
  };
  const [value, setValue] = useState("recents");
  console.log("this is what", value);
  return (
    <div className="container">
      <Header />

      {value === "dialpad" && (
        <div style={{ left: "6%", position: "absolute" }}>
          <DialPad
            onCallClick={onCallHandler}
            onHangUpClick={onHangUpHandler}
          />
        </div>
      )}
      {value === "recents" && <Activity />}
      {value === "archived" && <Archived />}
      <div style={{ bottom: "0", position: "absolute", width: "100%" }}>
        <Footer setValue={setValue} value={value} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
