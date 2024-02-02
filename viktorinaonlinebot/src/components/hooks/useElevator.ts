import { useAppDispatch, useAppSelector } from "../store";
import {
  dataLevelSlide,
  groupSlide,
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

  function nextLevel() {
    if (level < 2) {
      dispatch(dataLevelSlide(level + 1));
      toggleSlide();
      tg.BackButton.show();
    }
  }

  function prevLevel() {
    if (level > 1) {
      dispatch(dataLevelSlide(level - 1));
      toggleSlide();
    } else {
      dispatch(showSlide(false));
      tg.BackButton.hide();
    }
  }

  return { nextLevel, prevLevel };
}
