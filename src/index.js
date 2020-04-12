import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Player from "./components/player";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import myApp from "./reducers";

const store = createStore(myApp);

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
    {
      src: "//vjs.zencdn.net/v/oceans.webm",
      type: "video/webm",
    },
  ],
};
ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Player {...videoJsOptions} />
    </div>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
