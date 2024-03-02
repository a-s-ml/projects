import { ReactElement, useEffect, useState } from 'react';

export const useBackButton = () => {
  const tg = window.Telegram.WebApp;
  const [backButtonState, setBackButtonState] = useState(false);
  const [typeSlide, setSlide] = useState<ReactElement | undefined>(undefined);

  useEffect(() => {
    backButtonState
      ? (tg.BackButton.show(),
        tg.onEvent('backButtonClicked', () => setBackButtonState(false)))
      : tg.BackButton.hide();
    return () => {
      tg.BackButton.hide();
      setSlide(undefined);
      tg.offEvent('backButtonClicked', () => setBackButtonState(false));
    };
  }, [backButtonState]);

  return { setSlide, setBackButtonState, typeSlide, backButtonState };
};
