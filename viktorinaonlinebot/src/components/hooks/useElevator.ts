import { useAppDispatch, useAppSelector } from "../store";
import {
  addPatchSlide,
  backPatchSlide,
  removePatchSlide,
  selectSlidePatch,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const pathSlide = useAppSelector(selectSlidePatch);

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
    // dispatch(removePatchSlide(pathSlide[pathSlide.length - 1]));
    toggleSlide();
    dispatch(backPatchSlide(2));
  }

  return { toggleSlide, nextLevel, prevLevel };
}
