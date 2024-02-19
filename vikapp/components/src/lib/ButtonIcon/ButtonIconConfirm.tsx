import { buttonIconConst } from '@const';

interface ButtonIconConfirmProps {
  firstIcon: boolean;
  text: string;
  textConfirm: string;
  color: string;
  icon: string;
  func: (b: boolean) => void;
}

export const ButtonIconConfirm = ({
  color,
  firstIcon,
  text,
  textConfirm,
  icon,
  func,
}: ButtonIconConfirmProps) => {
  const currentIcon = buttonIconConst.filter((item) => item.name === icon);
  const cur = currentIcon[0];
  const tg = window.Telegram.WebApp;
  return (
    <div
      className="group flex items-start py-1 space-x-3 cursor-pointer text-[var(--tg-theme-text-color)]"
      onClick={() => tg.showConfirm(textConfirm, func)}
    >
      {firstIcon ? (
        <>
          <cur.component
            className={`h-5 w-5 text-${color}`}
            aria-hidden="true"
          />
          <div className={`text-sm font-medium text-${color}`}>
            <b>{text}</b>
          </div>
        </>
      ) : (
        <>
          <div className={`text-sm font-medium text-${color}`}>
            <b>{text}</b>
          </div>
          <cur.component
            className={`h-5 w-5 text-${color}`}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
};
