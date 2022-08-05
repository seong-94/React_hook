import { useState, useEffect } from "react";

function EffectHook(props) {
  //example 1
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const onHandleClick = (event) => {
    setCount(count + 1);
  };
  const onHandleInput = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    // console.log("hi");
  }, [count]);
  // Example 2
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("timer on");
  //     }, 1000);
  //     return () => clearInterval(timer);
  //     console.log("timer off");
  //   }, []);

  //   const [togle, setToggle] = useState(false);

  //   const onToggleBtn = () => {
  //     setToggle((prev) => !prev);
  //   };

  return (
    <div>
      {/* <div className="example 1">
        <h3> Click : {count} </h3>
        <button onClick={onHandleClick}>+ 1</button>
        <input
          type="text"
          value={name}
          onChange={onHandleInput}
          placeholder="Enter name"
        ></input>
        <p>name : {name}</p>
      </div> */}

      {/* <div className="example_2">
        <span> togle timer button test</span>
        <button onClick={onToggleBtn}>
          {togle ? "Timer On" : "Timer Off"}{" "}
        </button>
      </div> */}
    </div>
  );
}

export default EffectHook;
