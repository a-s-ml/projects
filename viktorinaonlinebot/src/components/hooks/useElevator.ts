import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  dataLevelSlide,
  groupSlide,
  selectSlideLevelData,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const level = useAppSelector(selectSlideLevelData);
  const tg = window.Telegram.WebApp;
  const [currentLevel, setCurrentLevel] = useState(level);
  const dispatch = useAppDispatch();
  console.log("currentLevel", currentLevel);

  if (currentLevel === 0) {
    tg.BackButton.hide();
  }
  if (currentLevel > 0) {
    tg.BackButton.show();
    tg.onEvent("backButtonClicked", () => prevLevel());
  }

  function toggleSlide() {
    dispatch(showSlide(false));
    setTimeout(() => {
      dispatch(showSlide(true));
    }, 250);
  }

  function nextLevel() {
    if (level < 2) {
      dispatch(dataLevelSlide(level + 1));
      setCurrentLevel(level + 1);
      toggleSlide();
    }
  }

  function prevLevel() {
    if (level >= 1) {
      dispatch(dataLevelSlide(level - 1));
      setCurrentLevel(level - 1);
      toggleSlide();
    } else {
      dispatch(showSlide(false));
    }
  }

  return { nextLevel, prevLevel };
}
