import { buttonIconConst } from '@const';
import { classNames } from '@functions';

type SimpleButtonProps = {
  content?: string;
  icon?: string;
  click: () => void;
};

export const SimpleButton = ({ content, icon, click }: SimpleButtonProps) => {
  const currentIcon = buttonIconConst.filter((item) => item.name === icon);
  const cur = currentIcon[0];
  return (
    <button
      onClick={click}
      type="button"
      className={classNames(
        content && icon ? 'gap-x-2 ' : '',
        'inline-flex items-center rounded-md bg-[var(--tg-theme-accent-text-color)] px-2 py-2 text-sm font-semibold text-[var(--tg-theme-accent-text-color)] shadow-sm hover:bg-[var(--tg-theme-accent-text-color)]'
      )}
    >
      {icon && (
        <cur.component
          className={`h-5 w-5 text-[var(--tg-theme-button-text-color)]`}
          aria-hidden="true"
        />
      )}
      <div
        className={`text-sm font-medium text-[var(--tg-theme-button-text-color)]`}
      >
        {content && <b>{content}</b>}
      </div>
    </button>
  );
};
export default SimpleButton;
