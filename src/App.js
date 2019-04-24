import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterList />
      </div>
    </Provider>
  );
}

export default App;
