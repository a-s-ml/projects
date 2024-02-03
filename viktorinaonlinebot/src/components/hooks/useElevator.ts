import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  addPatchSlide,
  removePatchSlide,
  selectSlidePatch,
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

  useEffect(() => {
    console.log(pathSlide);
    console.log(pathSlide.length);
    if (pathSlide.length < 2) {
      tg.BackButton.hide();
    }
    if (pathSlide.length >= 2) {
      tg.BackButton.offClick(() => prevLevel());
      tg.BackButton.show();
      tg.BackButton.onClick(() => prevLevel());
    }
  }, [pathSlide]);

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
    if (pathSlide.length > 2) toggleSlide();
    if (pathSlide.length < 3) dispatch(showSlide(false));
    dispatch(removePatchSlide(pathSlide[pathSlide.length - 1]));
  }

  return { nextLevel, prevLevel };
}
