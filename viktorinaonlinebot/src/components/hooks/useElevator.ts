import { useState } from "react";
import { useAppDispatch } from "../store";

export function useElevator() {
  const dispatch = useAppDispatch();

  const [currentLevel, setCurrentLevel] = useState(0);

  function nextLevel() {
    setCurrentLevel((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function prevLevel() {
    setCurrentLevel((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  return {
    nextLevel,
    prevLevel,
  };
}
