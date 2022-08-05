import { useState } from "react";
function StateHook() {
  // Example 1
  const [click, setClick] = useState(0);

  const handleClik = () => {
    setClick(click + 1);
  };
  const handleReset = () => {
    setClick(click * 0);
  };

  // Example 2
  const [names, setNames] = useState([]);
  const [input, setInput] = useState();
  const onHandleInput = (event) => {
    setInput(event.target.value);
    // console.log(event.target.value);
  };
  const onHandleUpload = () => {
    setNames((preState) => {
      return [input, ...preState];
    });
  };

  return (
    <div>
      <div className="Ex1">
        <span> How many times you Clicked :{click}</span>
        <button onClick={handleClik}> + 1 </button>
        <button onClick={handleReset}> Reset </button>
      </div>
      <div className="Ex2">
        <input
          type="text"
          value={input}
          placeholder="Name"
          onChange={onHandleInput}
        ></input>
        <button onClick={onHandleUpload}> Upload</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
      <div className="Ex3"></div>
    </div>
  );
}

export default StateHook;
