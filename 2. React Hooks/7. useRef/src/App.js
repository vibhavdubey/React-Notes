// useRef is use to manage any kind of DOM manipulations.
import { useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Vibhav";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write Vibhav</button>
    </>
  );
}

export default App;
