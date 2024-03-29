import { useAppDispatch, useAppSelector } from "../store";
import {
  addPatchSlide,
  removePatchSlide,
  selectSlidePatch,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
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
    if (pathSlide.length > 2) toggleSlide();
    if (pathSlide.length < 3) dispatch(showSlide(false));
    dispatch(removePatchSlide(pathSlide[pathSlide.length - 1]));
  }

  return { nextLevel, prevLevel };
}
