import { useState, useEffect } from "react";
import Wrapper from "./components/wrapper";

function App() {
  let [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? parseInt(saved) : 1;
  });

  const increment = () => {
    setCount((value) => value + 1);
  };

  const decrement = () => {
    setCount((value) => value - 1);
  };

  const reset = () => {
    setCount(1);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  console.log("re-render bo'ldi");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={ increment }>Oshirish ++</button>
      <br />
      <button onClick={ decrement }>Kamaytirish --</button>
      <br />
      <button onClick={reset}>Reset 🔄</button>
    </>
  );
}

export default App;
