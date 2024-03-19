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
      className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <cur.component className={`h-5 w-5 text-indigo-600`} aria-hidden="true" />
      <div className={`text-sm font-medium text-indigo-600`}>
        <b>{content}</b>
      </div>
    </button>
  );
};
export default SimpleButton;
