import { useEffect, useState } from 'react';

export const useBackButton = () => {
  const tg = window.Telegram.WebApp;
  const [backButtonState, setBackButtonState] = useState(false);
  const [typeSlide, setTypeSlide] = useState('');

  useEffect(() => {
    backButtonState
      ? (tg.BackButton.show(),
        tg.onEvent('backButtonClicked', () => setBackButtonState(false)))
      : (tg.BackButton.hide(), setTypeSlide(''));
    return () => {
      tg.BackButton.hide();
      tg.offEvent('backButtonClicked', () => setBackButtonState(false));
    };
  }, [backButtonState]);

  return { setTypeSlide, setBackButtonState, typeSlide, backButtonState };
};
