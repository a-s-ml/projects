import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  dataLevelSlide,
  dataPrevTypeSlide,
  dataTypeSlide,
  groupSlide,
  selectSlideLevelData,
  selectSlidePrevTypeData,
  selectSlideTypeData,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const prev = useAppSelector(selectSlidePrevTypeData)
  const current = useAppSelector(selectSlideTypeData)

  const level = useAppSelector(selectSlideLevelData);

  function toggleSlide() {
    dispatch(showSlide(false));
    setTimeout(() => {
      dispatch(showSlide(true));
    }, 250);
  }

  function nextLevel() {
    if (level < 2) {
      dispatch(dataLevelSlide(level + 1));
      toggleSlide();
      dispatch(dataPrevTypeSlide(current))
    }
  }

  function prevLevel() {
    if (level >= 1) {
      dispatch(dataLevelSlide(level - 1));
      toggleSlide();
    } else {
      dispatch(showSlide(false));
    }
    dispatch(dataTypeSlide(prev));
  }

  return { nextLevel, prevLevel };
}
