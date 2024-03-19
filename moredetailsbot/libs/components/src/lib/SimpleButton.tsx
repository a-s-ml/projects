import { buttonIconConst } from '@const';

type SimpleButtonProps = {
  content: string;
  icon: string;
  click: () => void;
};

export const SimpleButton = ({ content, icon, click }: SimpleButtonProps) => {
  const currentIcon = buttonIconConst.filter((item) => item.name === icon);
  const cur = currentIcon[0];
  return (
    <button
      onClick={click}
      type="button"
      className="inline-flex items-center gap-x-2 rounded-md bg-[var(--tg-theme-accent-text-color)] px-3.5 py-2.5 text-sm font-semibold text-[var(--tg-theme-accent-text-color)] shadow-sm hover:bg-[var(--tg-theme-accent-text-color)]"
    >
      <cur.component className={`h-5 w-5 text-tg-theme-button-text-color`} aria-hidden="true" />
      <div className={`text-sm font-medium text-tg-theme-button-text-color`}>
        <b>{content}</b>
      </div>
    </button>
  );
};
export default SimpleButton;
