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
  }

  function prevLevel() {
    toggleSlide();
    dispatch(removePatchSlide(pathSlide[pathSlide.length - 1]));
  }

  return { nextLevel, prevLevel };
}
