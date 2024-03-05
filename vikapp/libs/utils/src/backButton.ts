import { useEffect } from 'react';

type FunctionProps = () => void;

export const useBackButton = (state: boolean, onSubmit: FunctionProps) => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    state
      ? (tg.BackButton.show(), tg.onEvent('backButtonClicked', onSubmit))
      : tg.BackButton.hide();
  }, [state]);
};
