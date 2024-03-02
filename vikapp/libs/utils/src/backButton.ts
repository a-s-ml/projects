import { useEffect, useState } from 'react';

type FunctionProps = () => void;

export const useBackButton = (onSubmit: FunctionProps) => {
  const tg = window.Telegram.WebApp;
  const [backButtonState, setBackButtonState] = useState(false);

  useEffect(() => {
    backButtonState
      ? (tg.BackButton.show(), tg.onEvent('backButtonClicked', onSubmit))
      : tg.BackButton.hide();
    return () => {
      tg.BackButton.hide();
      tg.offEvent('backButtonClicked', onSubmit);
    };
  }, [backButtonState]);

  return { backButtonState, setBackButtonState };
};
