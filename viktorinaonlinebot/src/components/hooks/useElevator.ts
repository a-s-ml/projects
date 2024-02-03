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
  selectSlidePrevTypeData,
  selectSlideTypeData,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const prev = useAppSelector(selectSlidePrevTypeData);
  const current = useAppSelector(selectSlideTypeData);

  const level = useAppSelector(selectSlideLevelData);

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
