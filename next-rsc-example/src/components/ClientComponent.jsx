'use client'

import {useEffect, useState} from "react";

export const ClientComponent = ({initialValue}) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    setTime(Date.now());
  }, [setTime]);

  return (
    <div>
      Content from Client Component: {time}
    </div>
  );
};
