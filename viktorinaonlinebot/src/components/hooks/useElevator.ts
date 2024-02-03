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
  const prev = useAppSelector(selectSlidePrevTypeData);
  const current = useAppSelector(selectSlideTypeData);
  const pathSlide = useAppSelector(selectSlidePatch);

  const level = useAppSelector(selectSlideLevelData);


  if (pathSlide.length === 0) {
    tg.BackButton.hide();
  }
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
    if (level < 2) {
      dispatch(dataLevelSlide(level + 1));
      toggleSlide();
      dispatch(dataPrevTypeSlide(current));
      dispatch(addPatchSlide(name));
      dispatch(dataTypeSlide(name));
    }
  }

  function prevLevel() {
    if (level >= 1) {
      dispatch(dataLevelSlide(level - 1));
      toggleSlide();
      dispatch(removePatchSlide());
    } else {
      dispatch(showSlide(false));
    }
    dispatch(dataTypeSlide(prev));
  }

  return { nextLevel, prevLevel };
}
