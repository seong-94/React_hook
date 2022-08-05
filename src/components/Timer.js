import { useEffect, useState } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer on");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("timer off");
    };
  }, []);

  const [togle, setToggle] = useState(false);

  const onToggleBtn = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="example_2">
      <span> togle timer button test</span>
    </div>
  );
}

export default Timer;
