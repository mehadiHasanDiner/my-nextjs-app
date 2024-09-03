"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="text-center mt-4">
      <p>Counter: {counter} </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-warning m-2"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-warning m-2"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
