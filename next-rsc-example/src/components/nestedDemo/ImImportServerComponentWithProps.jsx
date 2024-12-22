'use client'
import {useCallback, useState} from "react";
import {ServerComponentWithProps} from "@/components/nestedDemo/ServerComponentWithProps.jsx";

export const ImImportServerComponentWithProps = ({initialValue}) => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count, setCount])

  return (
    <>
      <div>
        <ServerComponentWithProps count={count}/>
      </div>
      <button onClick={handleClick}>Add +1</button>
    </>
  );
};
