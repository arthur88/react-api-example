import React from "react";

import Main from "./pages/Main";
import Header from "./global/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
