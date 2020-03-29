import React from "react";
import heart from "./heart.svg";
import profileImage from "./girl.jpg";
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Box1">
            <img
              src={profileImage}
              className="Profile-photo"
              alt="profile pic"
            />
            <div className="Box2">
              <h1 className="Profile-name">Alex Guerrero</h1>
              <h2 className="Date">Lunes 26 de junio de 2017</h2>
            </div>
          </div>
          <p className="Text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
            ab, dignissimos non ducimus quisquam ipsa deleniti delectus odio,
            sequi nobis dolorum consequuntur? Minus, nobis numquam aspernatur
            impedit quaerat facilis!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam minus ab, dignissimos non ducimus quisquam
            ipsa deleniti delectus odio, sequi nobis dolorum consequuntur?
            Minus, nobis numquam aspernatur impedit quaerat facilis!
          </p>
          <div className="Box3">
            <button type="button" className="readMore">
              Leer más...
            </button>
            <div className="Box4">
              <p className="Count">37</p>
              <img src={heart} className="Heart" alt="like" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
