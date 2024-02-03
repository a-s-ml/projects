import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  addPatchSlide,
  dataLevelSlide,
  dataPrevTypeSlide,
  dataTypeSlide,
  groupSlide,
  removePatchSlide,
  selectSlideLevelData,
  selectSlidePatch,
  selectSlidePrevTypeData,
  selectSlideTypeData,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const pathSlide = useAppSelector(selectSlidePatch);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(pathSlide.length);

  // if (level > 0) {
  //   tg.BackButton.show();
  //   tg.onEvent("backButtonClicked", () => prevLevel());
  // }

  function toggleSlide() {
    dispatch(showSlide(false));
    setTimeout(() => {
      dispatch(showSlide(true));
    }, 250);
  }

  function nextLevel(name: string) {
    toggleSlide();
    dispatch(addPatchSlide(name));
    dispatch(dataTypeSlide(name));
    console.log("pathSlide.length", pathSlide.length);
    setCurrentLevelIndex(currentLevelIndex+1);
  }

  function prevLevel() {
    if (currentLevelIndex >= 1) {
      toggleSlide();
      dispatch(removePatchSlide());
      setCurrentLevelIndex(currentLevelIndex-1);
    } else {
      dispatch(showSlide(false));
    }
    dispatch(dataTypeSlide(pathSlide[pathSlide.length - 1]));
  }

  return { currentLevelIndex, nextLevel, prevLevel };
}
