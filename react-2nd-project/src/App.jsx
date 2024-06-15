import { useState } from "react";
import "./app.css"

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("")

  function removefirstElememt() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") {
          return "H";
        }
        return element;
      });
    });
  }

  function addLetterToIndex(letter, index){
    setArray(currentArray => {
      return [...currentArray.slice(0, index), letter, ...currentArray.slice(index)]
    })
  }

  return (
    <div id="Div1">
      {array.join(", ")}
      <br /> <br />
      <h3>Remove First Element: </h3>
      <button onClick={removefirstElememt}>Remove First Element</button>
      <br />
      <h3>Remove Specific Letter:</h3>
      <button onClick={() => removeSpecificLetter("A")}>Remove All A's</button>
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <button onClick={() => removeSpecificLetter("C")}>Remove All C's</button>
      <br />
      <h3>Add Letter To Start:</h3>
      <button onClick={() => addLetterToStart("A")}>Add 'A' to start</button>
      <button onClick={() => addLetterToStart("B")}>Add 'B' to start</button>
      <button onClick={() => addLetterToStart("C")}>Add 'C' to start</button>
      <br />
      <h3>Add Letter To End:</h3>
      <button onClick={() => addLetterToEnd("A")}>Add 'A' to End</button>
      <button onClick={() => addLetterToEnd("B")}>Add 'B' to End</button>
      <button onClick={() => addLetterToEnd("C")}>Add 'C' to End</button>
      <br />
      <h3>Clear The Array:</h3>
      <button onClick={clear}>Clear</button>
      <br />
      <h3>Reset The Array:</h3>
      <button onClick={reset}>Reset</button>
      <br />
      <h3>Update A to H</h3>
      <button onClick={updateAToH}>Update A to H</button>
      <br />
      <h3>Add Value to Array:</h3>
      <input value={value} onChange={e => setValue(e.target.value)}   />
      <br />
      <button onClick={() => addLetterToStart(value)}>Add Value to Array</button>
      <br />
      <h3>Add Letter At Index:</h3>
      <button onClick={() => addLetterToIndex("A", 1)}>Add A At Index at 1</button>
      <button onClick={() => addLetterToIndex("A", 2)}>Add A At Index at 2</button>
      <button onClick={() => addLetterToIndex("A", 3)}>Add A At Index at 3</button>
      <button onClick={() => addLetterToIndex("B", 1)}>Add B At Index at 1</button>
      <button onClick={() => addLetterToIndex("B", 2)}>Add B At Index at 2</button>
      <button onClick={() => addLetterToIndex("B", 3)}>Add B At Index at 3</button>
      <button onClick={() => addLetterToIndex("C", 1)}>Add C At Index at 1</button>
      <button onClick={() => addLetterToIndex("C", 2)}>Add C At Index at 2</button>
      <button onClick={() => addLetterToIndex("C", 3)}>Add C At Index at 3</button>
    </div>
  );
}

export default App;
