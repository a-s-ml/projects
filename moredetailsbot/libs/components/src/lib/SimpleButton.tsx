type SimpleButtonProps = {
  text: string;
  click: () => void;
};

export const SimpleButton = ({ text, click }: SimpleButtonProps) => {
  return (
    <button
      onClick={click}
      className="flex my-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
};
export default SimpleButton;
