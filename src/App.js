import React from "react";

import Header from "./global/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
