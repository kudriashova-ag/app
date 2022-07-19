import React, { useCallback, useEffect, useState } from "react";

const LoginForm = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);

  const log = useCallback(() => {
    console.log(count);
  }, [count]);

  // const log = ()=>console.log(count);

  const changeHandler = useCallback(
    ({ target: { value } }) => {
      setCount(Number(value));
    },
    []
  );


  const incrementHandler = () => {
    setCount(count + 1);
  };

  const TextHandler = () => {
    setText(Math.random());
  };

  useEffect(() => {
    console.log("Function create");
  }, [changeHandler]);

  return (
    <div>
      <h1>
        {text}: {count}
      </h1>
      <input type="number" value={count} onChange={changeHandler} />
      <button onClick={incrementHandler}>+</button>

      <button onClick={TextHandler}>Change Text</button>
    </div>
  );
};

// export default LoginForm;
