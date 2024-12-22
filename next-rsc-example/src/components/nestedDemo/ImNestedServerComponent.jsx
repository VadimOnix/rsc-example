'use client'
import {addToServerStateAction} from "@/app/actions.js";
import {useRouter} from "next/navigation.js";

export const ImNestedServerComponent = ({children}) => {
  const router = useRouter();

  const handleClick = async () => {
    await addToServerStateAction(1)
    router.refresh()
  }

  return (
    <>
      <div>
        {children}
      </div>
      <button onClick={handleClick}>Add +1</button>
    </>
  );
};
