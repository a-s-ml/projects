import { useEffect, useState } from 'react';

export const useBackButton = () => {
  const tg = window.Telegram.WebApp;
  const [backButtonState, setBackButtonState] = useState(false);

  useEffect(() => {
    backButtonState
      ? (tg.BackButton.show(),
        tg.onEvent('backButtonClicked', setBackButtonState(false)))
      : tg.BackButton.hide();
  }, [backButtonState]);

  return { backButtonState, setBackButtonState };
};
