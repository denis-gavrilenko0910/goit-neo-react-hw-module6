import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App/App";
import { store, persistor } from "./redux/store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="phoneShell">
          <div className="dynamicIsland"></div>
          <div className="actionButton"></div>
          <div className="volumeUp"></div>
          <div className="volumeDown"></div>
          <div className="powerButton"></div>
          <div className="homeIndicator"></div>
          <App />
        </div>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
