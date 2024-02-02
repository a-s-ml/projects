import { useAppDispatch, useAppSelector } from "../store";
import {
  dataLevelSlide,
  selectSlideLevelData,
  showSlide,
} from "../store/api/slide.slice";

export function useElevator() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const level = useAppSelector(selectSlideLevelData);

  function toggleSlide() {
    dispatch(showSlide(false));
    setTimeout(() => {
      dispatch(showSlide(true));
    }, 250);
  }

  async function nextLevel() {
    if (level < 2) {
      dispatch(dataLevelSlide(level + 1));
      toggleSlide();
    }
  }

  async function prevLevel() {
    if (level > 0) {
      dispatch(dataLevelSlide(level - 1));
      toggleSlide();
    }
  }

  return { nextLevel, prevLevel };
}
