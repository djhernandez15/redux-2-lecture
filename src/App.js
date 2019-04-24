import React from "react";
import { Provider } from "react-redux";
import CharacterList from "./components/CharacterList";
import store from "./store";

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
