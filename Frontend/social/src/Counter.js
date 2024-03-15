import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [secondCounter, setSecondCounter] = useState(1);
  useEffect(() => {
    console.log("Component Mounted...");
    return function () {
      console.log("Exit....");
    };
  }, []);

  useEffect(() => {
    console.log("Update Phase");
  }, [count]);
  //   useEffect(() => {
  //     console.log("Update Phase");
  //   }, [secondCounter]);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <h1>-----------------------------------------------------------------</h1>
      <h1>Second Counter: {secondCounter}</h1>
      <button
        onClick={() => {
          setSecondCounter(secondCounter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSecondCounter(secondCounter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
