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
  console.log(pathSlide.length);

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
    tg.BackButton.show();
    tg.BackButton.offClick(() => prevLevel());
    toggleSlide();
    dispatch(addPatchSlide(name));
    tg.BackButton.onClick(() => prevLevel());
  }

  function prevLevel() {
    if (pathSlide.length > 2) toggleSlide();
    if (pathSlide.length < 3) dispatch(showSlide(false));
    dispatch(removePatchSlide(pathSlide[pathSlide.length - 1]));
  }

  return { nextLevel, prevLevel };
}
