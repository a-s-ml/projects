import { buttonIconConst } from '@const';

interface ButtonIconProps {
  firstIcon: boolean;
  text: string;
  color: string;
  icon: string;
  func: (b: boolean) => void;
}

export const ButtonIcon = ({
  color,
  firstIcon,
  text,
  icon,
  func,
}: ButtonIconProps) => {
  const currentIcon = buttonIconConst.filter((item) => item.name === icon);
  const cur = currentIcon[0];
  return (
    <div
      className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
      onClick={() => func}
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
