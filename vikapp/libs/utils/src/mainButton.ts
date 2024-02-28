import { useEffect, useState } from 'react';

type FunctionProps = () => void;

export const useMainButton = (onSubmit: FunctionProps) => {
  const tg = window.Telegram.WebApp;
  const [mainButtonState, setMainButtonState] = useState(false);

  useEffect(() => {
    mainButtonState
      ? (tg.MainButton.setText('Далее'),
        tg.MainButton.show(),
        tg.onEvent('mainButtonClicked', onSubmit))
      : tg.MainButton.hide();
    return () => {
      // tg.MainButton.hide();
      tg.offEvent('mainButtonClicked', onSubmit);
    };
  }, [mainButtonState]);

  return { setMainButtonState };
};
