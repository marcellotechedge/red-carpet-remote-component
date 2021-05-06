import React from "react";
import ReactDOM from "react-dom";
import { RemoteComponent } from "./RemoteComponent";

const element = document.getElementById("root");
const url = "http://localhost:5000/app.js"; 

const HelloWorld = (props: any) => <RemoteComponent url={url} {...props} />;

const MainApp = () => {
  return (<div>
    <div>HERE MAIN</div>
    <div>HERE</div>
    <HelloWorld />
  </div>)
}

// ReactDOM.render(<HelloWorld name="Paciolan" />, element);
ReactDOM.render(<MainApp />, element);
